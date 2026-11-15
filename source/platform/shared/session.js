// Stateless session tokens (HMAC). Auth service issues, any service verifies with the shared secret — no network hop per request.
import crypto from 'node:crypto';
const key = (secret) => crypto.createHash('sha256').update(secret).digest();
export const issue = (secret, sub, days = 30) => { const p = Buffer.from(JSON.stringify({ u: sub, x: Date.now() + days * 864e5 })).toString('base64url'); return p + '.' + crypto.createHmac('sha256', key(secret)).update(p).digest('base64url'); };
export function verify(secret, header) {
  const [p, m] = String(header || '').replace(/^Bearer /, '').split('.');
  if (!p || !m) return null;
  const good = crypto.createHmac('sha256', key(secret)).update(p).digest('base64url');
  if (m.length !== good.length || !crypto.timingSafeEqual(Buffer.from(m), Buffer.from(good))) return null;
  try { const o = JSON.parse(Buffer.from(p, 'base64url')); return o.x > Date.now() ? o.u : null; } catch { return null; }
}
