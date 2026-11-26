// AUTH service: Google ID-token verification -> user record -> stateless session token. Owns table `users`.
import crypto from 'node:crypto';
import { serve, call, log } from '../../shared/http.js';
import { openDb } from '../../shared/db.js';
import { issue, verify } from '../../shared/session.js';
import { corsFrom } from '../../shared/cors.js';
const env = process.env, L = log('auth');
export async function start(o = {}) {
  const cfg = { port: +(o.port ?? env.AUTH_PORT ?? 8791), db: o.db ?? env.AUTH_DB ?? './data/auth.db', secret: o.secret ?? env.SESSION_SECRET ?? 'dev-secret', itoken: o.itoken ?? env.INTERNAL_TOKEN ?? 'dev-internal', social: o.social ?? env.SOCIAL_URL ?? 'http://127.0.0.1:8795',
    google: String(o.google ?? env.GOOGLE_CLIENT_ID ?? '').split(',').map((x) => x.trim()).filter(Boolean), jwks: o.jwks ?? env.GOOGLE_JWKS_URL ?? 'https://www.googleapis.com/oauth2/v3/certs', sync: o.sync ?? env.SYNC_URL ?? 'http://127.0.0.1:8792', edu: o.edu ?? env.EDU_URL ?? 'http://127.0.0.1:8796', verifyGoogle: o.verifyGoogle };
  const { q } = openDb(cfg.db, 'CREATE TABLE IF NOT EXISTS users(sub TEXT PRIMARY KEY,email TEXT,name TEXT,pic TEXT,created INTEGER,last INTEGER);');
  let jw = { at: 0, keys: [] };
  const keys = async () => { if (Date.now() - jw.at > 36e5 || !jw.keys.length) { const r = await fetch(cfg.jwks); if (!r.ok) throw new Error('jwks ' + r.status); jw = { at: Date.now(), keys: (await r.json()).keys || [] }; } return jw.keys; };
  const verifyGoogle = cfg.verifyGoogle || (async (t) => {
    const [h64, p64, s64] = String(t || '').split('.'); if (!h64 || !p64 || !s64) return null;
    let h, p; try { h = JSON.parse(Buffer.from(h64, 'base64url')); p = JSON.parse(Buffer.from(p64, 'base64url')); } catch { return null; }
    if (h.alg !== 'RS256') return null;
    const jwk = (await keys()).find((k) => k.kid === h.kid); if (!jwk) return null;
    if (!crypto.verify('RSA-SHA256', Buffer.from(h64 + '.' + p64), crypto.createPublicKey({ key: jwk, format: 'jwk' }), Buffer.from(s64, 'base64url'))) return null;
    if (!['accounts.google.com', 'https://accounts.google.com'].includes(p.iss) || !cfg.google.includes(p.aud) || !(p.exp * 1000 > Date.now()) || !p.sub) return null;
    return p;
  });
  // Generic OAuth2 code(+PKCE) login for social networks. Client IDs/secrets come ONLY from server env (OAUTH_<P>_ID / OAUTH_<P>_SECRET).
  const pic = (u, k) => (u && u[k]) || '';
  const OA = {
    discord: { tok: 'https://discord.com/api/oauth2/token', me: 'https://discord.com/api/users/@me', map: (u) => ({ sub: u.id, name: u.global_name || u.username, email: u.email || '', pic: u.avatar ? `https://cdn.discordapp.com/avatars/${u.id}/${u.avatar}.png` : '' }) },
    github: { tok: 'https://github.com/login/oauth/access_token', me: 'https://api.github.com/user', map: (u) => ({ sub: String(u.id), name: u.name || u.login, email: u.email || '', pic: pic(u, 'avatar_url') }) },
    x: { tok: 'https://api.twitter.com/2/oauth2/token', me: 'https://api.twitter.com/2/users/me?user.fields=profile_image_url', basic: true, map: (j) => { const u = j.data || {}; return { sub: u.id, name: u.name || u.username, email: '', pic: pic(u, 'profile_image_url') }; } },
    microsoft: { tok: 'https://login.microsoftonline.com/common/oauth2/v2.0/token', me: 'https://graph.microsoft.com/v1.0/me', map: (u) => ({ sub: u.id, name: u.displayName, email: u.mail || u.userPrincipalName || '', pic: '' }) },
    twitch: { tok: 'https://id.twitch.tv/oauth2/token', me: 'https://api.twitch.tv/helix/users', hdr: (id) => ({ 'client-id': id }), map: (j) => { const u = (j.data || [])[0] || {}; return { sub: u.id, name: u.display_name, email: u.email || '', pic: pic(u, 'profile_image_url') }; } },
    spotify: { tok: 'https://accounts.spotify.com/api/token', me: 'https://api.spotify.com/v1/me', basic: true, map: (u) => ({ sub: u.id, name: u.display_name || u.id, email: u.email || '', pic: (u.images && u.images[0] && u.images[0].url) || '' }) },
  };
  const oaf = o.oauthFetch || fetch;
  const oaCfg = (p) => ({ id: o.oauth?.[p]?.id ?? env['OAUTH_' + p.toUpperCase() + '_ID'] ?? '', secret: o.oauth?.[p]?.secret ?? env['OAUTH_' + p.toUpperCase() + '_SECRET'] ?? '' });
  async function oauthUser(p, { code, verifier, redirect }) {
    const d = OA[p], c = oaCfg(p), form = new URLSearchParams({ grant_type: 'authorization_code', code, redirect_uri: redirect, client_id: c.id });
    if (verifier) form.set('code_verifier', verifier);
    const h = { 'content-type': 'application/x-www-form-urlencoded', accept: 'application/json' };
    if (c.secret) { if (d.basic) h.authorization = 'Basic ' + Buffer.from(c.id + ':' + c.secret).toString('base64'); else form.set('client_secret', c.secret); }
    const tr = await oaf(d.tok, { method: 'POST', headers: h, body: form }); const tj = await tr.json().catch(() => ({}));
    if (!tj.access_token) return null;
    const ur = await oaf(d.me, { headers: { authorization: 'Bearer ' + tj.access_token, accept: 'application/json', 'user-agent': 'lingoblox', ...(d.hdr ? d.hdr(c.id) : {}) } });
    if (!ur.ok) return null; const u = d.map(await ur.json().catch(() => ({})));
    return u.sub ? u : null;
  }
  const routes = {
    'GET /v1/auth/providers': async () => { const out = {}; for (const p of Object.keys(OA)) { const c = oaCfg(p); if (c.id) out[p] = { id: c.id }; } if (cfg.google.length) out.google = { id: cfg.google[0] }; return [200, { ok: true, providers: out }]; },
    'POST /v1/auth/oauth': async ({ body }) => {
      const p = String(body.provider || ''); if (!OA[p]) return [400, { ok: false, err: 'provider' }];
      if (!oaCfg(p).id) return [503, { ok: false, err: 'noconf' }];
      if (!body.code || !body.redirect) return [400, { ok: false, err: 'args' }];
      let u; try { u = await oauthUser(p, body); } catch (e) { L('error', 'oauth ' + p + ' ' + e.message); return [502, { ok: false, err: 'net' }]; }
      if (!u) return [401, { ok: false, err: 'token' }];
      const now = Date.now(), sub = p + ':' + u.sub;
      q('INSERT INTO users(sub,email,name,pic,created,last) VALUES(?,?,?,?,?,?) ON CONFLICT(sub) DO UPDATE SET email=excluded.email,name=excluded.name,pic=excluded.pic,last=excluded.last').run(sub, u.email, u.name || '', u.pic, now, now);
      return [200, { ok: true, token: issue(cfg.secret, sub), user: { email: u.email, name: u.name || '', pic: u.pic, provider: p } }];
    },
    'GET /health': async () => [200, { ok: true, svc: 'auth', google: cfg.google.length > 0 || !!cfg.verifyGoogle }],
    'POST /v1/auth/google': async ({ body }) => {
      if (!cfg.google.length && !cfg.verifyGoogle) return [503, { ok: false, err: 'noconf' }];
      let p; try { p = await verifyGoogle(body.idToken); } catch (e) { L('error', 'google verify ' + e.message); return [502, { ok: false, err: 'net' }]; }
      if (!p) return [401, { ok: false, err: 'token' }];
      const now = Date.now();
      q('INSERT INTO users(sub,email,name,pic,created,last) VALUES(?,?,?,?,?,?) ON CONFLICT(sub) DO UPDATE SET email=excluded.email,name=excluded.name,pic=excluded.pic,last=excluded.last').run(p.sub, p.email || '', p.name || '', p.picture || '', now, now);
      return [200, { ok: true, token: issue(cfg.secret, p.sub), user: { email: p.email || '', name: p.name || '', pic: p.picture || '' } }];
    },
    'DELETE /v1/account': async ({ req }) => {
      const u = verify(cfg.secret, req.headers.authorization); if (!u) return [401, { ok: false, err: 'auth' }];
      q('DELETE FROM users WHERE sub=?').run(u);
      try { await call(cfg.social, '/internal/social/delete', { method: 'POST', body: { sub: u }, token: cfg.itoken }); } catch (e) { L('warn', 'social purge failed ' + e.message); }
      try { await call(cfg.sync, '/internal/sync/delete', { method: 'POST', body: { sub: u }, token: cfg.itoken }); } catch (e) { L('warn', 'sync purge failed ' + e.message); }
      try { await call(cfg.edu, '/internal/edu/delete', { method: 'POST', body: { sub: u }, token: cfg.itoken }); } catch (e) { L('warn', 'edu purge failed ' + e.message); }
      return [200, { ok: true }];
    },
  };
  return serve({ name: 'auth', port: cfg.port, routes, cors: corsFrom(o.origins ?? env.ALLOWED_ORIGINS), limit: 60, internalToken: cfg.itoken });
}
if (import.meta.url === 'file://' + process.argv[1]) start();
