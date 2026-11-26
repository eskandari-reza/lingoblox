import test from 'node:test';
import assert from 'node:assert/strict';
import { start as auth } from '../services/auth/index.js';
import { start as sync } from '../services/sync/index.js';
import { start as billing } from '../services/billing/index.js';
import { start as ai } from '../services/ai/index.js';
import { start as social } from '../services/social/index.js';
import { start as edu } from '../services/edu/index.js';
import { start as gateway } from '../gateway/index.js';
import http from 'node:http';
const P = { gw: 18787, a: 18791, s: 18792, b: 18793, i: 18794, g: 18799, so: 18795, e: 18800 }, SECRET = 's3', IT = 'it', G = `http://127.0.0.1:${P.gw}`;
const DID = 'aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee';
let servers = [], fake;
test.before(async () => {
  fake = http.createServer((req, res) => { let b = ''; req.on('data', (c) => b += c); req.on('end', () => { res.writeHead(200, { 'content-type': 'application/json' }); res.end(JSON.stringify({ candidates: [{ content: { parts: [{ text: 'hello from fake gemini' }] } }] })); }); }).listen(P.g);
  const c = { secret: SECRET, itoken: IT, db: ':memory:' };
  servers = await Promise.all([
    auth({ ...c, port: P.a, edu: `http://127.0.0.1:${P.e}`, sync: `http://127.0.0.1:${P.s}`, social: `http://127.0.0.1:${P.so}`, verifyGoogle: async (t) => t === 'good' ? { sub: 'u1', email: 'e@x.y', name: 'N' } : /^good:\w+$/.test(t) ? { sub: t.slice(5), email: t.slice(5) + '@x.y', name: 'N' } : null }),
    sync({ ...c, port: P.s }), social({ ...c, port: P.so }), edu({ ...c, port: P.e, adminCode: 'ROOT' }), billing({ ...c, port: P.b, fakePlay: '1', keyPath: new URL('../keys/voucher_private.pem', import.meta.url).pathname }),
    ai({ ...c, port: P.i, geminiKey: 'k', geminiBase: `http://127.0.0.1:${P.g}`, billing: `http://127.0.0.1:${P.b}` })]);
  servers.push(await gateway({ port: P.gw, auth: `http://127.0.0.1:${P.a}`, sync: `http://127.0.0.1:${P.s}`, social: `http://127.0.0.1:${P.so}`, edu: `http://127.0.0.1:${P.e}`, billing: `http://127.0.0.1:${P.b}`, ai: `http://127.0.0.1:${P.i}`, limit: 1000 }));
});
test.after(() => { servers.forEach((s) => s.close()); fake.close(); setTimeout(() => process.exit(0), 50); });
const j = async (m, p, body, tok) => { const r = await fetch(G + p, { method: m, headers: { 'content-type': 'application/json', ...(tok ? { authorization: 'Bearer ' + tok } : {}) }, body: body ? JSON.stringify(body) : undefined }); return [r.status, await r.json()]; };
test('gateway aggregates health of all services', async () => { const [s, o] = await j('GET', '/health'); assert.equal(s, 200); assert.equal(o.ok, true); assert.deepEqual(Object.keys(o.services).sort(), ['ai', 'auth', 'billing', 'edu', 'social', 'sync']); });
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
test('auth: social OAuth (discord/x) code exchange -> session; unconfigured provider 503; providers list', async () => {
  const oa = http.createServer((req, res) => { let b = ''; req.on('data', (c) => b += c); req.on('end', () => { res.writeHead(200, { 'content-type': 'application/json' });
    if (req.url === '/tok') return res.end(JSON.stringify(/code=good/.test(b) ? { access_token: 'AT' } : {}));
    res.end(JSON.stringify(req.url === '/x' ? { data: { id: '7', name: 'Xer', profile_image_url: 'p' } } : { id: '9', username: 'dis', global_name: 'Disc', avatar: null, email: 'd@x.y' })); }); });
  await new Promise((r) => oa.listen(18796, r));
  const au = await auth({ secret: SECRET, itoken: IT, db: ':memory:', port: 18797, oauth: { discord: { id: 'did' }, x: { id: 'xid', secret: 'xs' } },
    oauthFetch: (u, o) => fetch(u.includes('discord.com/api/oauth2') || u.includes('twitter.com/2/oauth2') ? 'http://127.0.0.1:18796/tok' : u.includes('twitter') ? 'http://127.0.0.1:18796/x' : 'http://127.0.0.1:18796/d', o) });
  const A = 'http://127.0.0.1:18797', post = async (b) => { const r = await fetch(A + '/v1/auth/oauth', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(b) }); return [r.status, await r.json()]; };
  const pl = await (await fetch(A + '/v1/auth/providers')).json(); assert.deepEqual(Object.keys(pl.providers).sort(), ['discord', 'x']); assert.equal(pl.providers.x.secret, undefined);
  const [s1, o1] = await post({ provider: 'discord', code: 'good', redirect: 'https://a/b' }); assert.equal(s1, 200); assert.equal(o1.user.name, 'Disc'); assert.ok(o1.token);
  const [s2, o2] = await post({ provider: 'x', code: 'good', redirect: 'https://a/b', verifier: 'v' }); assert.equal(s2, 200); assert.equal(o2.user.name, 'Xer');
  assert.equal((await post({ provider: 'discord', code: 'bad', redirect: 'https://a/b' }))[0], 401);
  assert.equal((await post({ provider: 'github', code: 'good', redirect: 'https://a/b' }))[0], 503);
  assert.equal((await post({ provider: 'nope', code: 'x', redirect: 'y' }))[0], 400);
  au.close(); oa.close();
});

test('edu: invite -> reviewer submits reviews; teacher class, assignment, student report; admin stats/export; role gates', async () => {
  const tok = async (n) => (await j('POST', '/v1/auth/google', { idToken: 'good:' + n }))[1].token;
  const adm = await tok('adm'), rev = await tok('rev'), tea = await tok('tea'), stu = await tok('stu');
  assert.deepEqual((await j('GET', '/v1/review/me', null, rev))[1].roles, []);
  assert.equal((await j('POST', '/v1/review/submit', { items: [] }, rev))[0], 403);
  assert.equal((await j('POST', '/v1/review/join', { code: 'nope' }, rev))[0], 404);
  assert.deepEqual((await j('POST', '/v1/review/join', { code: 'ROOT', name: 'Boss' }, adm))[1].roles.sort(), ['admin', 'reviewer', 'teacher']);
  assert.equal((await j('POST', '/v1/review/invite', { role: 'reviewer' }, rev))[0], 403);
  const [, iv] = await j('POST', '/v1/review/invite', { role: 'reviewer', uses: 1 }, adm); assert.equal(iv.code.length, 8);
  const [, iv2] = await j('POST', '/v1/review/invite', { role: 'teacher', uses: 2 }, adm);
  assert.deepEqual((await j('POST', '/v1/review/join', { code: iv.code, name: 'Ali', uni: 'Azad' }, rev))[1].roles, ['reviewer']);
  assert.equal((await j('POST', '/v1/review/join', { code: iv.code }, tea))[0], 404);
  await j('POST', '/v1/review/join', { code: iv2.code, name: 'Tea' }, tea);
  const [, sb] = await j('POST', '/v1/review/submit', { items: [{ lang: 'de', item: 'w:1000', verdict: 'fix', field: 'pron', sug: 'tish', note: 'n' }, { lang: 'de', item: 'w:1001', verdict: 'ok' }, { lang: 'xx', item: 'w:1', verdict: 'ok' }, { lang: 'de', item: 'bad', verdict: 'ok' }] }, rev); assert.equal(sb.saved, 2);
  await j('POST', '/v1/review/submit', { items: [{ lang: 'de', item: 'w:1000', verdict: 'flag', field: 'trans' }] }, rev);
  const [, mine] = await j('GET', '/v1/review/mine?lang=de', null, rev); assert.equal(mine.items.length, 2); assert.equal(mine.items.find((x) => x.item === 'w:1000').verdict, 'flag');
  assert.equal((await j('GET', '/v1/review/stats', null, rev))[0], 403);
  const [, stt] = await j('GET', '/v1/review/stats', null, adm); assert.ok(stt.by.length >= 2); assert.equal(stt.who[0].name, 'Ali');
  const [, ex] = await j('GET', '/v1/review/export?lang=de', null, adm); assert.equal(ex.rows.length, 2); assert.equal(ex.rows[0].who, 'Ali');
  const [, cl] = await j('POST', '/v1/class/create', { name: 'Class A', lang: 'de' }, tea); assert.equal(cl.id.length, 6);
  assert.equal((await j('POST', '/v1/class/create', { name: 'x y', lang: 'de' }, stu))[0], 403);
  assert.equal((await j('POST', '/v1/class/join', { id: 'ZZZZZZ' }, stu))[0], 404);
  assert.equal((await j('POST', '/v1/class/join', { id: cl.id.toLowerCase(), nick: 'Stu' }, stu))[1].class.name, 'Class A');
  assert.equal((await j('POST', '/v1/class/assign', { id: cl.id, title: 'Week 1', items: [1000, 1001, 'x'], due: '2026-12-01' }, tea))[0], 200);
  assert.equal((await j('POST', '/v1/class/assign', { id: cl.id, title: 'Hack', items: [1] }, stu))[0], 403);
  const [, as] = await j('GET', '/v1/class/assignments?id=' + cl.id, null, stu); assert.deepEqual(as.items[0].items, [1000, 1001]);
  assert.equal((await j('GET', '/v1/class/assignments?id=' + cl.id, null, rev))[0], 403);
  await j('POST', '/v1/class/report', { id: cl.id, xp: 120, streak: 3, words: 40 }, stu);
  const [, ro] = await j('GET', '/v1/class/roster?id=' + cl.id, null, tea); assert.equal(ro.members[0].xp, 120); assert.equal(ro.members[0].nick, 'Stu'); assert.equal(ro.members[0].sub, undefined);
  assert.equal((await j('GET', '/v1/class/roster?id=' + cl.id, null, stu))[0], 403);
  assert.equal((await j('GET', '/v1/class/mine', null, stu))[1].joined.length, 1);
  await j('POST', '/v1/class/kick', { id: cl.id, mid: ro.members[0].mid }, tea); assert.equal((await j('GET', '/v1/class/roster?id=' + cl.id, null, tea))[1].members.length, 0);
  assert.equal((await j('DELETE', '/v1/account', null, tea))[1].ok, true); assert.equal((await j('GET', '/v1/class/mine', null, tea))[1].teaching.length, 0);
});

test('edu chat: staff/lang/class rooms, access, reply/ref, pin, delete, mute, unread', async () => {
  const tok = async (n) => (await j('POST', '/v1/auth/google', { idToken: 'good:' + n }))[1].token;
  const adm = await tok('cadm'), rev = await tok('crev'), stu = await tok('cstu'), out = await tok('cout');
  await j('POST', '/v1/review/join', { code: 'ROOT', name: 'Boss' }, adm);
  const [, iv] = await j('POST', '/v1/review/invite', { role: 'reviewer' }, adm); await j('POST', '/v1/review/join', { code: iv.code, name: 'Rev' }, rev);
  const send = (t, room, txt, extra = {}) => j('POST', '/v1/chat/send', { room, txt, ...extra }, t);
  assert.equal((await send(stu, 'staff', 'hi'))[0], 403); assert.equal((await send(out, 'lang:de', 'hi'))[0], 403); assert.equal((await send(rev, 'lang:zz', 'x'))[0], 403);
  const [, m1] = await send(rev, 'staff', 'Hello <b>team</b>'); assert.ok(m1.id);
  assert.equal((await send(rev, 'staff', '   '))[0], 400);
  const [, m2] = await send(adm, 'lang:de', 'check this', { ref: 'de|w:1000', reply: 0 }); assert.ok(m2.id);
  const [, g] = await j('GET', '/v1/chat/msgs?room=staff', null, adm); assert.equal(g.msgs.length, 1); assert.equal(g.msgs[0].badge, 'reviewer'); assert.equal(g.msgs[0].name, 'Rev'); assert.ok(!g.msgs[0].txt.includes('<')); assert.equal(g.mod, true);
  const [, r1] = await j('GET', '/v1/chat/rooms', null, adm); assert.equal(r1.rooms.find((r) => r.room === 'staff').unread, 1);
  await j('POST', '/v1/chat/seen', { room: 'staff', last: m1.id }, adm); assert.equal((await j('GET', '/v1/chat/rooms', null, adm))[1].rooms.find((r) => r.room === 'staff').unread, 0);
  const [, rp] = await send(adm, 'staff', 'reply', { reply: m1.id }); const [, g2] = await j('GET', '/v1/chat/msgs?room=staff&after=' + m1.id, null, rev); assert.equal(g2.msgs[0].reply, m1.id); assert.equal(g2.mod, false);
  assert.equal((await j('POST', '/v1/chat/pin', { id: rp.id }, rev))[0], 403); await j('POST', '/v1/chat/pin', { id: rp.id }, adm); assert.equal((await j('GET', '/v1/chat/msgs?room=staff', null, rev))[1].pin.id, rp.id);
  assert.equal((await j('POST', '/v1/chat/delete', { id: rp.id }, rev))[0], 403); assert.equal((await j('POST', '/v1/chat/delete', { id: m1.id }, rev))[0], 200);
  await j('POST', '/v1/chat/mute', { id: m2.id }, adm); // mutes adm itself (author of m2) -> then unmute
  assert.equal((await send(adm, 'staff', 'x'))[1].err, 'muted'); await j('POST', '/v1/chat/mute', { id: m2.id, on: false }, adm); assert.equal((await send(adm, 'staff', 'ok'))[0], 200);
  const [, cl] = await j('POST', '/v1/class/create', { name: 'Chat Class', lang: 'de' }, adm); await j('POST', '/v1/class/join', { id: cl.id, nick: 'Stu' }, stu);
  assert.equal((await send(stu, 'class:' + cl.id, 'hello teacher'))[0], 200); assert.equal((await send(out, 'class:' + cl.id, 'intruder'))[0], 403);
  const [, cm] = await j('GET', '/v1/chat/msgs?room=class:' + cl.id, null, adm); assert.equal(cm.msgs[0].name, 'Stu'); assert.equal(cm.msgs[0].badge, 'student');
  assert.ok((await j('GET', '/v1/chat/rooms', null, stu))[1].rooms.some((r) => r.room === 'class:' + cl.id)); assert.ok(!(await j('GET', '/v1/chat/rooms', null, stu))[1].rooms.some((r) => r.room === 'staff'));
  for (let i = 0; i < 12; i++) await send(rev, 'staff', 'spam' + i); assert.equal((await send(rev, 'staff', 'more'))[0], 429);
});
