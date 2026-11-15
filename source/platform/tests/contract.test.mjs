import test from 'node:test';
import assert from 'node:assert/strict';
import { start as auth } from '../services/auth/index.js';
import { start as sync } from '../services/sync/index.js';
import { start as billing } from '../services/billing/index.js';
import { start as ai } from '../services/ai/index.js';
import { start as social } from '../services/social/index.js';
import { start as gateway } from '../gateway/index.js';
import http from 'node:http';
const P = { gw: 18787, a: 18791, s: 18792, b: 18793, i: 18794, g: 18799, so: 18795 }, SECRET = 's3', IT = 'it', G = `http://127.0.0.1:${P.gw}`;
const DID = 'aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee';
let servers = [], fake;
test.before(async () => {
  fake = http.createServer((req, res) => { let b = ''; req.on('data', (c) => b += c); req.on('end', () => { res.writeHead(200, { 'content-type': 'application/json' }); res.end(JSON.stringify({ candidates: [{ content: { parts: [{ text: 'hello from fake gemini' }] } }] })); }); }).listen(P.g);
  const c = { secret: SECRET, itoken: IT, db: ':memory:' };
  servers = await Promise.all([
    auth({ ...c, port: P.a, sync: `http://127.0.0.1:${P.s}`, social: `http://127.0.0.1:${P.so}`, verifyGoogle: async (t) => t === 'good' ? { sub: 'u1', email: 'e@x.y', name: 'N' } : /^good:\w+$/.test(t) ? { sub: t.slice(5), email: t.slice(5) + '@x.y', name: 'N' } : null }),
    sync({ ...c, port: P.s }), social({ ...c, port: P.so }), billing({ ...c, port: P.b, fakePlay: '1', keyPath: new URL('../keys/voucher_private.pem', import.meta.url).pathname }),
    ai({ ...c, port: P.i, geminiKey: 'k', geminiBase: `http://127.0.0.1:${P.g}`, billing: `http://127.0.0.1:${P.b}` })]);
  servers.push(await gateway({ port: P.gw, auth: `http://127.0.0.1:${P.a}`, sync: `http://127.0.0.1:${P.s}`, social: `http://127.0.0.1:${P.so}`, billing: `http://127.0.0.1:${P.b}`, ai: `http://127.0.0.1:${P.i}`, limit: 1000 }));
});
test.after(() => { servers.forEach((s) => s.close()); fake.close(); setTimeout(() => process.exit(0), 50); });
const j = async (m, p, body, tok) => { const r = await fetch(G + p, { method: m, headers: { 'content-type': 'application/json', ...(tok ? { authorization: 'Bearer ' + tok } : {}) }, body: body ? JSON.stringify(body) : undefined }); return [r.status, await r.json()]; };
test('gateway aggregates health of all services', async () => { const [s, o] = await j('GET', '/health'); assert.equal(s, 200); assert.equal(o.ok, true); assert.deepEqual(Object.keys(o.services).sort(), ['ai', 'auth', 'billing', 'social', 'sync']); });
test('internal routes are not reachable through the gateway', async () => { assert.equal((await j('GET', '/internal/plan?did=x'))[0], 404); });
test('auth: bad token 401, good token issues session usable by sync service', async () => {
  assert.equal((await j('POST', '/v1/auth/google', { idToken: 'bad' }))[0], 401);
  const [s, o] = await j('POST', '/v1/auth/google', { idToken: 'good' }); assert.equal(s, 200); assert.ok(o.token);
  assert.equal((await j('GET', '/v1/sync'))[0], 401);
  const [, g0] = await j('GET', '/v1/sync', null, o.token); assert.equal(g0.data, null);
  const [, p1] = await j('PUT', '/v1/sync', { data: { a: 1 } }, o.token); assert.equal(p1.ok, true);
  const [, p2] = await j('PUT', '/v1/sync', { data: { a: 2 }, base: 0 }, o.token); assert.equal(p2.err, 'conflict');
  const [, g1] = await j('GET', '/v1/sync', null, o.token); assert.deepEqual(g1.data, { a: 1 });
  assert.equal((await j('DELETE', '/v1/account', null, o.token))[1].ok, true);
  assert.equal((await j('GET', '/v1/sync', null, o.token))[1].data, null); // cross-service purge happened
});
test('billing: fake play purchase -> pro entitlement; ai quota follows plan', async () => {
  const [, a] = await j('POST', '/v1/ai', { did: DID, messages: [{ role: 'user', content: 'hi' }] }); assert.equal(a.plan, 'free'); assert.equal(a.left, 4);
  const [, v] = await j('POST', '/v1/purchase/verify', { did: DID, productId: 'remedic_pro_3m', purchaseToken: 'ok:30' }); assert.equal(v.ok, true); assert.equal(v.ent.p, 'pro');
  const [, b] = await j('POST', '/v1/ai', { did: DID, messages: [{ role: 'user', content: 'hi' }] }); assert.equal(b.plan, 'pro'); assert.equal(b.left, 48);
});
test('ai: validates args and enforces free limit', async () => {
  assert.equal((await j('POST', '/v1/ai', { did: 'x', messages: [] }))[0], 400);
  const D2 = 'bbbbbbbb-bbbb-cccc-dddd-eeeeeeeeeeee'; let last; for (let i = 0; i < 6; i++) last = await j('POST', '/v1/ai', { did: D2, messages: [{ role: 'user', content: 'x' }] });
  assert.equal(last[0], 429);
});

test('social: profile, friends, duel, contest, wall', async () => {
  const login = async (sub) => (await j('POST', '/v1/auth/google', { idToken: 'good:' + sub }))[1].token;
  const A = await login('ua'), B = await login('ub');
  assert.equal((await j('GET', '/v1/social/me'))[0], 401);
  const [, ma] = await j('GET', '/v1/social/me', null, A), [, mb] = await j('GET', '/v1/social/me', null, B);
  assert.ok(ma.me.code && ma.me.nick);
  assert.equal((await j('POST', '/v1/social/profile', { nick: 'Ava', avatar: '🦊', country: 'ir' }, A))[1].ok, true);
  // anti-cheat clamp: cannot jump above the daily room
  const [, r1] = await j('POST', '/v1/social/report', { cups: 99999 }, A); assert.equal(r1.me.cups, 600);
  // friends
  assert.equal((await j('POST', '/v1/social/duel', { to: mb.me.id }, A))[0], 403);
  assert.equal((await j('POST', '/v1/social/friend', { code: mb.me.code }, A))[1].st, 'pend');
  assert.equal((await j('POST', '/v1/social/friend', { code: ma.me.code }, B))[1].st, 'ok');
  const [, fr] = await j('GET', '/v1/social/friends', null, A); assert.equal(fr.friends.length, 1);
  // duel
  const [, d] = await j('POST', '/v1/social/duel', { to: mb.me.id }, A); assert.ok(d.id);
  const [, l] = await j('GET', '/v1/social/duels', null, B); assert.equal(l.list.length, 1); assert.ok(l.list[0].seed);
  assert.equal((await j('POST', '/v1/social/duel/play', { id: d.id, score: 700, ms: 9000 }, A))[1].done, false);
  const [, fin] = await j('POST', '/v1/social/duel/play', { id: d.id, score: 400, ms: 8000 }, B); assert.equal(fin.done, true); assert.equal(fin.win, 'opp'); assert.ok(fin.delta <= 0);
  assert.equal((await j('POST', '/v1/social/duel/play', { id: d.id, score: 1, ms: 1 }, B))[0], 409);
  const [, tp] = await j('GET', '/v1/social/top?scope=friends', null, A); assert.equal(tp.list[0].me, true); assert.ok(tp.list[0].total > tp.list[1].total);
  // contest
  const [, c] = await j('GET', '/v1/social/contest', null, A); assert.ok(c.id && c.seed);
  assert.equal((await j('POST', '/v1/social/contest/score', { id: 'old', score: 1 }, A))[0], 400);
  await j('POST', '/v1/social/contest/score', { id: c.id, score: 800, ms: 5000 }, A); await j('POST', '/v1/social/contest/score', { id: c.id, score: 300, ms: 5000 }, A);
  const [, c2] = await j('GET', '/v1/social/contest', null, B); assert.equal(c2.top[0].score, 800);
  // wall
  assert.equal((await j('POST', '/v1/social/wall', { t: 'c:' + c.id, text: 'gg <b>' }, B))[1].ok, true);
  await j('POST', '/v1/social/react', { t: 'c:' + c.id, e: '🔥' }, A);
  const [, w] = await j('GET', '/v1/social/wall?t=c:' + c.id, null, A); assert.equal(w.list[0].txt, 'gg b'); assert.equal(w.react['🔥'], 1);
  assert.equal((await j('POST', '/v1/social/wall', { t: 'x:1', text: 'a' }, A))[0], 400);
});
