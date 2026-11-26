// API GATEWAY: the only public entry. Path-prefix routing to services, CORS, rate-limit, aggregate health. No business logic here.
import http from 'node:http';
import { send, log, rateLimiter } from '../shared/http.js';
import { corsFrom } from '../shared/cors.js';
const env = process.env, L = log('gateway');
export async function start(o = {}) {
  const U = { auth: o.auth ?? env.AUTH_URL ?? 'http://127.0.0.1:8791', sync: o.sync ?? env.SYNC_URL ?? 'http://127.0.0.1:8792', billing: o.billing ?? env.BILLING_URL ?? 'http://127.0.0.1:8793', social: o.social ?? env.SOCIAL_URL ?? 'http://127.0.0.1:8795', edu: o.edu ?? env.EDU_URL ?? 'http://127.0.0.1:8796', ai: o.ai ?? env.AI_URL ?? 'http://127.0.0.1:8794' };
  const MAP = [['/v1/auth/', 'auth'], ['/v1/account', 'auth'], ['/v1/sync', 'sync'], ['/v1/redeem', 'billing'], ['/v1/purchase/', 'billing'], ['/v1/entitlement', 'billing'], ['/v1/rtdn', 'billing'], ['/v1/ai', 'ai'], ['/v1/social/', 'social'], ['/v1/review/', 'edu'], ['/v1/class/', 'edu'], ['/v1/chat/', 'edu']];
  const cors = corsFrom(o.origins ?? env.ALLOWED_ORIGINS), lim = rateLimiter(+(o.limit ?? env.RATE ?? 120));
  const srv = http.createServer(async (req, res) => {
    const ch = cors(req); if (req.method === 'OPTIONS') { res.writeHead(204, ch); return res.end(); }
    const ip = (req.headers['x-forwarded-for'] || req.socket.remoteAddress || '').toString().split(',')[0].trim();
    if (lim(ip)) return send(res, 429, { ok: false, err: 'rate' }, ch);
    const url = new URL(req.url, 'http://x');
    if (url.pathname === '/health') {
      const out = {}; await Promise.all(Object.entries(U).map(async ([k, b]) => { try { const r = await fetch(b + '/health', { signal: AbortSignal.timeout(1500) }); out[k] = r.ok ? await r.json() : { ok: false }; } catch { out[k] = { ok: false }; } }));
      return send(res, 200, { ok: Object.values(out).every((x) => x.ok), services: out }, ch);
    }
    if (url.pathname.startsWith('/internal/')) return send(res, 404, { ok: false, err: 'nf' }, ch);
    const m = MAP.find(([p]) => url.pathname.startsWith(p)); if (!m) return send(res, 404, { ok: false, err: 'nf' }, ch);
    try {
      const chunks = []; for await (const c of req) { chunks.push(c); if (chunks.reduce((a, b) => a + b.length, 0) > 420e3) return send(res, 413, { ok: false, err: 'big' }, ch); }
      const h = { 'content-type': req.headers['content-type'] || 'application/json', 'x-forwarded-for': ip }; if (req.headers.authorization) h.authorization = req.headers.authorization;
      const r = await fetch(U[m[1]] + url.pathname + url.search, { method: req.method, headers: h, body: ['GET', 'HEAD'].includes(req.method) ? undefined : Buffer.concat(chunks), signal: AbortSignal.timeout(30e3) });
      res.writeHead(r.status, { 'content-type': 'application/json', ...ch }); res.end(Buffer.from(await r.arrayBuffer()));
    } catch (e) { L('error', e.message, { path: url.pathname, upstream: m[1] }); send(res, 502, { ok: false, err: 'upstream', svc: m[1] }, ch); }
  });
  return new Promise((ok) => srv.listen(+(o.port ?? env.PORT ?? 8787), () => { L('info', 'listening'); ok(srv); }));
}
if (import.meta.url === 'file://' + process.argv[1]) start();
