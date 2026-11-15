// Shared HTTP plumbing for every service: router, CORS, JSON body, rate-limit, structured logs. Zero deps.
import http from 'node:http';
export const log = (svc) => (lvl, msg, extra = {}) => console.log(JSON.stringify({ t: new Date().toISOString(), svc, lvl, msg, ...extra }));
export const send = (res, code, obj, h = {}) => { res.writeHead(code, { 'content-type': 'application/json', ...h }); res.end(JSON.stringify(obj)); };
export const readBody = (req, max = 64e3) => new Promise((ok, no) => {
  let n = 0; const a = [];
  req.on('data', (c) => { n += c.length; if (n > max) { if (n - c.length <= max) no(new Error('too large')); } else a.push(c); });
  req.on('end', () => { if (n > max) return; try { ok(a.length ? JSON.parse(Buffer.concat(a).toString()) : {}); } catch { no(new Error('bad json')); } });
  req.on('error', no);
});
export function rateLimiter(max = 60) {
  const hits = new Map();
  setInterval(() => { const n = Date.now(); for (const [k, v] of hits) if (v[1] < n) hits.delete(k); }, 60e3).unref();
  return (ip) => { const now = Date.now(); let h = hits.get(ip); if (!h || h[1] < now) { h = [0, now + 60e3]; hits.set(ip, h); } return ++h[0] > max; };
}
/** routes: {'GET /path': async (ctx)=>[status, obj]}, ctx={body,req,url,ip}. opts.internalToken protects /internal/* */
export function serve({ name, port, routes, cors = null, limit = 0, bodyMax = 64e3, internalToken = '' }) {
  const L = log(name), lim = limit ? rateLimiter(limit) : null;
  const srv = http.createServer(async (req, res) => {
    const ch = cors ? cors(req) : {};
    if (req.method === 'OPTIONS') { res.writeHead(204, ch); return res.end(); }
    const ip = (req.headers['x-forwarded-for'] || req.socket.remoteAddress || '').toString().split(',')[0].trim();
    if (lim && lim(ip)) return send(res, 429, { ok: false, err: 'rate' }, ch);
    const url = new URL(req.url, 'http://x');
    if (url.pathname.startsWith('/internal/') && (!internalToken || req.headers['x-internal-token'] !== internalToken)) return send(res, 403, { ok: false, err: 'forbidden' }, ch);
    const h = routes[req.method + ' ' + url.pathname];
    if (!h) return send(res, 404, { ok: false, err: 'nf' }, ch);
    try {
      const body = ['POST', 'PUT', 'PATCH'].includes(req.method) ? await readBody(req, bodyMax) : {};
      const [code, out] = await h({ body, req, url, ip });
      send(res, code, out, ch);
    } catch (e) {
      if (e.message === 'too large') return send(res, 413, { ok: false, err: 'big' }, ch);
      if (e.message === 'bad json') return send(res, 400, { ok: false, err: 'json' }, ch);
      L('error', e.message, { path: url.pathname }); send(res, 500, { ok: false, err: 'server' }, ch);
    }
  });
  return new Promise((ok) => srv.listen(port, () => { L('info', 'listening', { port }); ok(srv); }));
}
/** service-to-service call (internal network only) */
export async function call(base, path, { method = 'GET', body, token = '', headers = {} } = {}) {
  const r = await fetch(base + path, { method, headers: { 'content-type': 'application/json', 'x-internal-token': token, ...headers }, body: body ? JSON.stringify(body) : undefined });
  let j = {}; try { j = await r.json(); } catch { } return [r.status, j];
}
