// AUTH service: Google ID-token verification -> user record -> stateless session token. Owns table `users`.
import crypto from 'node:crypto';
import { serve, call, log } from '../../shared/http.js';
import { openDb } from '../../shared/db.js';
import { issue, verify } from '../../shared/session.js';
import { corsFrom } from '../../shared/cors.js';
const env = process.env, L = log('auth');
export async function start(o = {}) {
  const cfg = { port: +(o.port ?? env.AUTH_PORT ?? 8791), db: o.db ?? env.AUTH_DB ?? './data/auth.db', secret: o.secret ?? env.SESSION_SECRET ?? 'dev-secret', itoken: o.itoken ?? env.INTERNAL_TOKEN ?? 'dev-internal', social: o.social ?? env.SOCIAL_URL ?? 'http://127.0.0.1:8795',
    google: String(o.google ?? env.GOOGLE_CLIENT_ID ?? '').split(',').map((x) => x.trim()).filter(Boolean), jwks: o.jwks ?? env.GOOGLE_JWKS_URL ?? 'https://www.googleapis.com/oauth2/v3/certs', sync: o.sync ?? env.SYNC_URL ?? 'http://127.0.0.1:8792', verifyGoogle: o.verifyGoogle };
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
  const routes = {
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
      return [200, { ok: true }];
    },
  };
  return serve({ name: 'auth', port: cfg.port, routes, cors: corsFrom(o.origins ?? env.ALLOWED_ORIGINS), limit: 60, internalToken: cfg.itoken });
}
if (import.meta.url === 'file://' + process.argv[1]) start();
