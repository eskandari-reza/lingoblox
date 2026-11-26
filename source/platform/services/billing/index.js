// BILLING service: voucher redemption, Google Play subscription verification, signed entitlements, plan lookup for other services.
// Owns tables vouchers/redemptions/purchases. Signing key never leaves this service.
import crypto from 'node:crypto';
import fs from 'node:fs';
import { serve } from '../../shared/http.js';
import { openDb } from '../../shared/db.js';
import { corsFrom } from '../../shared/cors.js';
const env = process.env;
export async function start(o = {}) {
  const PORT = +(o.port ?? env.BILLING_PORT ?? 8793), PKG = env.PLAY_PACKAGE || 'app.remedic.learn', KEY_PATH = o.keyPath ?? env.VOUCHER_PRIVATE_KEY ?? './keys/voucher_private.pem', SA_PATH = env.PLAY_SERVICE_ACCOUNT || '';
  const RTDN_TOKEN = env.RTDN_TOKEN || '', DEV_FAKE_PLAY = (o.fakePlay ?? env.DEV_FAKE_PLAY) == '1', ITOKEN = o.itoken ?? env.INTERNAL_TOKEN ?? 'dev-internal';
  const DID_RE = /^[0-9a-f-]{20,40}$/i;
  const { db, q } = openDb(o.db ?? env.BILLING_DB ?? './data/billing.db', `
CREATE TABLE IF NOT EXISTS vouchers(i TEXT PRIMARY KEY, uses INTEGER NOT NULL DEFAULT 0);
CREATE TABLE IF NOT EXISTS redemptions(i TEXT, did TEXT, at INTEGER, PRIMARY KEY(i,did));
CREATE TABLE IF NOT EXISTS purchases(token TEXT PRIMARY KEY, did TEXT, product TEXT, plan TEXT, until INTEGER, state TEXT, updated INTEGER);
CREATE INDEX IF NOT EXISTS purchases_did ON purchases(did);`);
const privKey = crypto.createPrivateKey(fs.readFileSync(KEY_PATH));
const pubKey = crypto.createPublicKey(privKey);
const b64u = (b) => Buffer.from(b).toString('base64url');
const sign = (obj) => {
  const raw = Buffer.from(JSON.stringify(obj));
  const sig = crypto.sign('sha256', raw, { key: privKey, dsaEncoding: 'ieee-p1363' });
  return { b64: b64u(raw), sig: b64u(sig) };
};
function verifyCode(code) {
  const parts = String(code || '').replace(/\s+/g, '').split('.');
  if (parts.length !== 2) return null;
  try {
    const raw = Buffer.from(parts[0], 'base64url'), sig = Buffer.from(parts[1], 'base64url');
    if (!crypto.verify('sha256', raw, { key: pubKey, dsaEncoding: 'ieee-p1363' }, sig)) return null;
    const p = JSON.parse(raw.toString());
    return p && p.i ? p : null;
  } catch { return null; }
}

/* ---------- Google Play Developer API (no SDK: RS256 JWT -> access token -> REST) ---------- */
let sa = null, saTok = null;
if (SA_PATH && fs.existsSync(SA_PATH)) sa = JSON.parse(fs.readFileSync(SA_PATH, 'utf8'));
async function playToken() {
  if (saTok && saTok.exp > Date.now() + 60e3) return saTok.t;
  const now = Math.floor(Date.now() / 1000);
  const h = b64u(JSON.stringify({ alg: 'RS256', typ: 'JWT' }));
  const c = b64u(JSON.stringify({ iss: sa.client_email, scope: 'https://www.googleapis.com/auth/androidpublisher', aud: 'https://oauth2.googleapis.com/token', iat: now, exp: now + 3600 }));
  const s = crypto.sign('RSA-SHA256', Buffer.from(h + '.' + c), sa.private_key).toString('base64url');
  const r = await fetch('https://oauth2.googleapis.com/token', { method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion: h + '.' + c + '.' + s }) });
  const j = await r.json();
  if (!j.access_token) throw new Error('google token: ' + JSON.stringify(j));
  saTok = { t: j.access_token, exp: Date.now() + (j.expires_in || 3600) * 1000 };
  return saTok.t;
}
const PRODUCT_RE = /^remedic_(pro|premium)_(3|6|12)m$/;
/** Returns {plan, until, state} for a purchase token. state: active|expired|pending|canceled */
async function playCheck(productId, token) {
  const m = PRODUCT_RE.exec(productId);
  if (!m) throw Object.assign(new Error('unknown product'), { code: 'product' });
  if (DEV_FAKE_PLAY) {
    const f = /^ok:(\d+)$/.exec(token); // fake token "ok:<days>"
    if (!f) return { plan: m[1], until: 0, state: 'expired' };
    return { plan: m[1], until: Date.now() + +f[1] * 864e5, state: 'active' };
  }
  if (!sa) throw Object.assign(new Error('play service account not configured'), { code: 'config' });
  const r = await fetch(`https://androidpublisher.googleapis.com/androidpublisher/v3/applications/${PKG}/purchases/subscriptionsv2/tokens/${encodeURIComponent(token)}`, { headers: { authorization: 'Bearer ' + await playToken() } });
  const j = await r.json();
  if (!r.ok) throw Object.assign(new Error('play: ' + (j.error && j.error.message)), { code: 'play', status: r.status });
  const line = (j.lineItems || []).find((l) => l.productId === productId) || (j.lineItems || [])[0];
  if (!line) return { plan: m[1], until: 0, state: 'expired' };
  const until = Date.parse(line.expiryTime || 0) || 0;
  const st = j.subscriptionState || '';
  let state = 'expired';
  if (st === 'SUBSCRIPTION_STATE_ACTIVE' || st === 'SUBSCRIPTION_STATE_IN_GRACE_PERIOD') state = 'active';
  else if (st === 'SUBSCRIPTION_STATE_CANCELED') state = until > Date.now() ? 'active' : 'expired';
  else if (st === 'SUBSCRIPTION_STATE_PENDING') state = 'pending';
  if (state === 'active' && until <= Date.now()) state = 'expired';
  return { plan: m[1], until, state };
}
const RANK = { free: 0, pro: 1, premium: 2 };
function entitlementFor(did) {
  const rows = q('SELECT * FROM purchases WHERE did=? AND state=? AND until>?').all(did, 'active', Date.now());
  if (!rows.length) return null;
  rows.sort((a, b) => RANK[b.plan] - RANK[a.plan] || b.until - a.until);
  const r = rows[0];
  const ent = { t: 'ent', d: did, p: r.plan, u: r.until, at: Date.now() };
  return { ...sign(ent), p: r.plan, u: r.until };
}
const planOf = (did) => { const e = entitlementFor(did); return e ? e.p : 'free'; };
const day = () => new Date().toISOString().slice(0, 10);


  const routes = {
    'GET /health': async () => [200, { ok: true, svc: 'billing', play: !!sa || DEV_FAKE_PLAY }],
    'GET /internal/plan': async ({ url }) => [200, { ok: true, plan: planOf(url.searchParams.get('did') || '') }],
  'POST /v1/redeem': async ({ body: b }) => {
    if (!DID_RE.test(b.did || '')) return [400, { ok: false, err: 'did' }];
    const p = verifyCode(b.code);
    if (!p) return [200, { ok: false, err: 'bad' }];
    if (p.x && p.x < day()) return [200, { ok: false, err: 'exp' }];
    const max = Number.isInteger(p.n) && p.n > 0 ? Math.min(p.n, 100000) : 1;
    db.exec('BEGIN IMMEDIATE');
    try {
      if (q('SELECT 1 FROM redemptions WHERE i=? AND did=?').get(p.i, b.did)) { db.exec('ROLLBACK'); return [200, { ok: false, err: 'used' }]; }
      q('INSERT OR IGNORE INTO vouchers(i,uses) VALUES(?,0)').run(p.i);
      const v = q('SELECT uses FROM vouchers WHERE i=?').get(p.i);
      if (v.uses >= max) { db.exec('ROLLBACK'); return [200, { ok: false, err: 'used' }]; }
      q('UPDATE vouchers SET uses=uses+1 WHERE i=?').run(p.i);
      q('INSERT INTO redemptions(i,did,at) VALUES(?,?,?)').run(p.i, b.did, Date.now());
      db.exec('COMMIT');
    } catch (e) { try { db.exec('ROLLBACK'); } catch { } throw e; }
    return [200, { ok: true, grant: { i: p.i, k: p.k, v: p.v, c: p.c || '' } }];
  },

  'POST /v1/purchase/verify': async ({ body: b }) => {
    if (!DID_RE.test(b.did || '') || typeof b.productId !== 'string' || typeof b.purchaseToken !== 'string' || b.purchaseToken.length > 600) return [400, { ok: false, err: 'args' }];
    let r;
    try { r = await playCheck(b.productId, b.purchaseToken); }
    catch (e) { return [e.code === 'product' ? 400 : 502, { ok: false, err: e.code || 'play', msg: e.message }]; }
    const owner = q('SELECT did FROM purchases WHERE token=?').get(b.purchaseToken);
    // a token already bound to another device can only be moved by the restore flow below (same Google account)
    q('INSERT INTO purchases(token,did,product,plan,until,state,updated) VALUES(?,?,?,?,?,?,?) ON CONFLICT(token) DO UPDATE SET did=excluded.did,product=excluded.product,plan=excluded.plan,until=excluded.until,state=excluded.state,updated=excluded.updated')
      .run(b.purchaseToken, b.did, b.productId, r.plan, r.until, r.state, Date.now());
    const ent = entitlementFor(b.did);
    return [200, { ok: !!ent, pending: r.state === 'pending', moved: !!(owner && owner.did !== b.did), ent: ent || null }];
  },

  // Refresh: re-checks Google for this device's subscriptions that are about to expire / not yet confirmed.
  'POST /v1/entitlement': async ({ body: b }) => {
    if (!DID_RE.test(b.did || '')) return [400, { ok: false, err: 'did' }];
    const rows = q('SELECT * FROM purchases WHERE did=? AND (state<>? OR until<?)').all(b.did, 'canceled', Date.now() + 2 * 864e5);
    for (const r of rows) {
      if (r.updated > Date.now() - 10 * 60e3) continue;
      try { const c = await playCheck(r.product, r.token); q('UPDATE purchases SET plan=?,until=?,state=?,updated=? WHERE token=?').run(c.plan, c.until, c.state, Date.now(), r.token); } catch { }
    }
    return [200, { ok: true, ent: entitlementFor(b.did) }];
  },

  'POST /v1/rtdn': async ({ body: b, req, url }) => {
    if (!RTDN_TOKEN || url.searchParams.get('token') !== RTDN_TOKEN) return [403, { ok: false }];
    try {
      const m = JSON.parse(Buffer.from(b.message.data, 'base64').toString());
      const n = m.subscriptionNotification;
      if (n && n.purchaseToken) {
        const row = q('SELECT * FROM purchases WHERE token=?').get(n.purchaseToken);
        if (row) { const c = await playCheck(row.product, row.token); q('UPDATE purchases SET plan=?,until=?,state=?,updated=? WHERE token=?').run(c.plan, c.until, c.state, Date.now(), row.token); }
      }
    } catch { }
    return [200, { ok: true }]; // always 200 so Pub/Sub does not retry forever
  },
  };
  return serve({ name: 'billing', port: PORT, routes, cors: corsFrom(o.origins ?? env.ALLOWED_ORIGINS), limit: 60, internalToken: ITOKEN });
}
if (import.meta.url === 'file://' + process.argv[1]) start();
