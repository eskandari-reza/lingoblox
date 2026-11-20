// EDU service: roles (reviewer / teacher / admin) via invite codes, content reviews of words & sentences, teacher classes, assignments, student progress reports. Owns edu.db.
import crypto from 'node:crypto';
import { serve } from '../../shared/http.js';
import { openDb } from '../../shared/db.js';
import { verify } from '../../shared/session.js';
import { corsFrom } from '../../shared/cors.js';
const env = process.env;
const SCHEMA = `
CREATE TABLE IF NOT EXISTS role(sub TEXT,role TEXT,name TEXT,uni TEXT,at INTEGER,PRIMARY KEY(sub,role));
CREATE TABLE IF NOT EXISTS invite(code TEXT PRIMARY KEY,role TEXT,left INTEGER,exp INTEGER,note TEXT,at INTEGER);
CREATE TABLE IF NOT EXISTS review(sub TEXT,lang TEXT,item TEXT,verdict TEXT,field TEXT,sug TEXT,note TEXT,at INTEGER,PRIMARY KEY(sub,lang,item));
CREATE INDEX IF NOT EXISTS review_l ON review(lang,verdict);
CREATE TABLE IF NOT EXISTS class(id TEXT PRIMARY KEY,teacher TEXT,name TEXT,lang TEXT,at INTEGER);
CREATE TABLE IF NOT EXISTS member(cid TEXT,sub TEXT,nick TEXT,xp INTEGER DEFAULT 0,streak INTEGER DEFAULT 0,words INTEGER DEFAULT 0,rat INTEGER DEFAULT 0,at INTEGER,PRIMARY KEY(cid,sub));
CREATE TABLE IF NOT EXISTS chat(id INTEGER PRIMARY KEY AUTOINCREMENT,room TEXT,sub TEXT,name TEXT,badge TEXT,txt TEXT,ref TEXT,reply INTEGER,pin INTEGER DEFAULT 0,at INTEGER);
CREATE INDEX IF NOT EXISTS chat_r ON chat(room,id);
CREATE TABLE IF NOT EXISTS seen(sub TEXT,room TEXT,last INTEGER,PRIMARY KEY(sub,room));
CREATE TABLE IF NOT EXISTS mute(sub TEXT PRIMARY KEY,at INTEGER);
CREATE TABLE IF NOT EXISTS assign(id INTEGER PRIMARY KEY AUTOINCREMENT,cid TEXT,title TEXT,lang TEXT,items TEXT,due TEXT,at INTEGER);`;
const LANGS = 'fa en ar az de es fr hi it ja ko pt ru tr zh'.split(' '), VERD = ['ok', 'fix', 'flag'], FIELDS = ['', 'word', 'pron', 'trans', 'example', 'level', 'topic', 'offensive', 'other'];
const clean = (s, n) => String(s ?? '').replace(/[\u0000-\u001f<>]/g, ' ').trim().slice(0, n);
const hid = (s) => crypto.createHash('sha1').update(String(s)).digest('hex').slice(0, 10);
export async function start(o = {}) {
  const cfg = { port: +(o.port ?? env.EDU_PORT ?? 8796), db: o.db ?? env.EDU_DB ?? './data/edu.db', secret: o.secret ?? env.SESSION_SECRET ?? 'dev-secret', itoken: o.itoken ?? env.INTERNAL_TOKEN ?? 'dev-internal', admin: o.adminCode ?? env.ADMIN_CODE ?? '' };
  const { q } = openDb(cfg.db, SCHEMA);
  const ok = (x = {}) => [200, { ok: true, ...x }], bad = (c, e) => [c, { ok: false, err: e }];
  const roles = (sub) => q('SELECT role FROM role WHERE sub=?').all(sub).map((r) => r.role);
  const has = (sub, ...rs) => { const m = roles(sub); return m.includes('admin') || rs.some((r) => m.includes(r)); };
  const wrap = (need, fn) => async (c) => { const u = verify(cfg.secret, c.req.headers.authorization); if (!u) return bad(401, 'auth'); if (need && !has(u, ...need)) return bad(403, 'role'); return fn({ ...c, u }); };
  // 'mod' = may moderate the room (admin, or the class teacher); true = may read/write; false = no access
  const access = (u, room) => {
    if (room === 'staff' || /^lang:[a-z]{2}$/.test(room)) { if (room.startsWith('lang:') && !LANGS.includes(room.slice(5))) return false; return has(u, 'reviewer', 'teacher') ? (roles(u).includes('admin') ? 'mod' : true) : false; }
    if (/^class:[A-Z0-9]{6}$/.test(room)) { const c = q('SELECT teacher FROM class WHERE id=?').get(room.slice(6)); if (!c) return false; if (c.teacher === u || roles(u).includes('admin')) return 'mod'; return q('SELECT 1 x FROM member WHERE cid=? AND sub=?').get(room.slice(6), u) ? true : false; }
    return false; };
  const rcode = (n) => crypto.randomBytes(n).toString('hex').toUpperCase().slice(0, n);
  const routes = {
    'GET /health': async () => [200, { ok: true, svc: 'edu', admin: !!cfg.admin }],

    /* ---- staff chat: rooms = staff (all staff), lang:<xx> (staff), class:<id> (teacher + members). Polling-based. ---- */
    'GET /v1/chat/rooms': wrap(null, async ({ u }) => {
      const staff = has(u, 'reviewer', 'teacher'), out = [];
      const cnt = (room) => { const l = (q('SELECT last FROM seen WHERE sub=? AND room=?').get(u, room) || { last: 0 }).last; return q('SELECT COUNT(*) n FROM chat WHERE room=? AND id>? AND sub!=?').get(room, l, u).n; };
      if (staff) { out.push({ room: 'staff', kind: 'staff', unread: cnt('staff') }); for (const l of LANGS) out.push({ room: 'lang:' + l, kind: 'lang', lang: l, unread: cnt('lang:' + l) }); }
      for (const c of q('SELECT id,name,lang FROM class WHERE teacher=?').all(u)) out.push({ room: 'class:' + c.id, kind: 'class', name: c.name, lang: c.lang, teacher: 1, unread: cnt('class:' + c.id) });
      for (const c of q('SELECT c.id,c.name,c.lang FROM member m JOIN class c ON c.id=m.cid WHERE m.sub=?').all(u)) out.push({ room: 'class:' + c.id, kind: 'class', name: c.name, lang: c.lang, unread: cnt('class:' + c.id) });
      return ok({ rooms: out, muted: !!q('SELECT 1 x FROM mute WHERE sub=?').get(u) }); }),
    'GET /v1/chat/msgs': wrap(null, async ({ u, url }) => {
      const room = String(url.searchParams.get('room') || ''), a = access(u, room); if (!a) return bad(403, 'room');
      const after = Math.max(0, +url.searchParams.get('after') || 0), lim = Math.min(100, Math.max(1, +url.searchParams.get('limit') || 50));
      const rows = after ? q('SELECT * FROM chat WHERE room=? AND id>? ORDER BY id LIMIT ?').all(room, after, lim) : q('SELECT * FROM (SELECT * FROM chat WHERE room=? ORDER BY id DESC LIMIT ?) ORDER BY id').all(room, lim);
      const pin = q('SELECT * FROM chat WHERE room=? AND pin=1 ORDER BY id DESC LIMIT 1').get(room);
      const pub = (m) => ({ id: m.id, name: m.name, badge: m.badge, txt: m.txt, ref: m.ref || '', reply: m.reply || 0, pin: m.pin, at: m.at, mine: m.sub === u });
      return ok({ msgs: rows.map(pub), pin: pin ? pub(pin) : null, mod: a === 'mod' }); }),
    'POST /v1/chat/send': wrap(null, async ({ u, body: b }) => {
      const room = String(b.room || ''), a = access(u, room); if (!a) return bad(403, 'room');
      if (q('SELECT 1 x FROM mute WHERE sub=?').get(u)) return bad(403, 'muted');
      const txt = clean(b.txt, 600); if (!txt) return bad(400, 'empty');
      if (q('SELECT COUNT(*) n FROM chat WHERE sub=? AND at>?').get(u, Date.now() - 60e3).n >= 12) return bad(429, 'rate');
      const ref = /^[a-z]{2}\|[ws]:\d{1,7}$/.test(String(b.ref || '')) ? String(b.ref) : '', reply = q('SELECT id FROM chat WHERE id=? AND room=?').get(+b.reply || 0, room) ? +b.reply : 0;
      const rs = roles(u), badge = rs.includes('admin') ? 'admin' : rs.includes('teacher') ? 'teacher' : rs.includes('reviewer') ? 'reviewer' : 'student';
      let name = ''; if (room.startsWith('class:') && badge === 'student') name = (q('SELECT nick FROM member WHERE cid=? AND sub=?').get(room.slice(6), u) || {}).nick || '';
      if (!name) name = (q("SELECT name FROM role WHERE sub=? AND name!='' LIMIT 1").get(u) || {}).name || (badge === 'student' ? 'Student' : 'Member');
      const r = q('INSERT INTO chat(room,sub,name,badge,txt,ref,reply,at) VALUES(?,?,?,?,?,?,?,?)').run(room, u, clean(name, 40), badge, txt, ref, reply, Date.now());
      return ok({ id: Number(r.lastInsertRowid) }); }),
    'POST /v1/chat/delete': wrap(null, async ({ u, body: b }) => { const m = q('SELECT id,sub,room FROM chat WHERE id=?').get(+b.id); if (!m) return bad(404, 'msg'); const a = access(u, m.room); if (m.sub !== u && a !== 'mod') return bad(403, 'role'); q('DELETE FROM chat WHERE id=?').run(m.id); return ok(); }),
    'POST /v1/chat/pin': wrap(null, async ({ u, body: b }) => { const m = q('SELECT id,room FROM chat WHERE id=?').get(+b.id); if (!m || access(u, m.room) !== 'mod') return bad(403, 'role'); q('UPDATE chat SET pin=0 WHERE room=?').run(m.room); if (b.on !== false) q('UPDATE chat SET pin=1 WHERE id=?').run(m.id); return ok(); }),
    'POST /v1/chat/mute': wrap(['admin'], async ({ body: b }) => { const m = q('SELECT sub FROM chat WHERE id=?').get(+b.id); if (!m) return bad(404, 'msg'); if (b.on === false) q('DELETE FROM mute WHERE sub=?').run(m.sub); else q('INSERT OR REPLACE INTO mute(sub,at) VALUES(?,?)').run(m.sub, Date.now()); return ok(); }),
    'POST /v1/chat/seen': wrap(null, async ({ u, body: b }) => { const room = String(b.room || ''); if (!access(u, room)) return bad(403, 'room'); q('INSERT INTO seen(sub,room,last) VALUES(?,?,?) ON CONFLICT(sub,room) DO UPDATE SET last=MAX(last,excluded.last)').run(u, room, Math.max(0, Math.floor(+b.last || 0))); return ok(); }),
    'GET /v1/review/me': wrap(null, async ({ u }) => { const r = q('SELECT name,uni FROM role WHERE sub=? AND name IS NOT NULL LIMIT 1').get(u) || {}; return ok({ roles: roles(u), name: r.name || '', uni: r.uni || '', reviews: q('SELECT COUNT(*) n FROM review WHERE sub=?').get(u).n }); }),
    'POST /v1/review/join': wrap(null, async ({ u, body: b }) => {
      const c = clean(b.code, 40), name = clean(b.name, 60), uni = clean(b.uni, 80), now = Date.now(); let add = [];
      if (cfg.admin && c === cfg.admin) add = ['admin', 'reviewer', 'teacher'];
      else { const i = q('SELECT * FROM invite WHERE code=?').get(c.toUpperCase()); if (!i || i.left <= 0 || (i.exp && i.exp < now)) return bad(404, 'code'); q('UPDATE invite SET left=left-1 WHERE code=?').run(i.code); add = i.role === 'both' ? ['reviewer', 'teacher'] : [i.role]; }
      for (const r of add) q('INSERT INTO role(sub,role,name,uni,at) VALUES(?,?,?,?,?) ON CONFLICT(sub,role) DO UPDATE SET name=excluded.name,uni=excluded.uni').run(u, r, name, uni, now);
      return ok({ roles: roles(u) }); }),
    'POST /v1/review/submit': wrap(['reviewer'], async ({ u, body: b }) => {
      const L = Array.isArray(b.items) ? b.items.slice(0, 300) : []; let n = 0;
      for (const x of L) { const lang = String(x.lang), item = String(x.item), v = String(x.verdict), f = String(x.field || '');
        if (!LANGS.includes(lang) || !/^[ws]:\d{1,7}$/.test(item) || !VERD.includes(v) || !FIELDS.includes(f)) continue;
        q('INSERT INTO review(sub,lang,item,verdict,field,sug,note,at) VALUES(?,?,?,?,?,?,?,?) ON CONFLICT(sub,lang,item) DO UPDATE SET verdict=excluded.verdict,field=excluded.field,sug=excluded.sug,note=excluded.note,at=excluded.at').run(u, lang, item, v, f, clean(x.sug, 300), clean(x.note, 300), Date.now()); n++; }
      return ok({ saved: n }); }),
    'GET /v1/review/mine': wrap(['reviewer'], async ({ u, url }) => { const l = url.searchParams.get('lang'); const r = l ? q('SELECT lang,item,verdict,field,sug,note,at FROM review WHERE sub=? AND lang=? LIMIT 20000').all(u, l) : q('SELECT lang,item,verdict,field,sug,note,at FROM review WHERE sub=? LIMIT 20000').all(u); return ok({ items: r }); }),
    'GET /v1/review/stats': wrap(['admin'], async () => ok({ by: q('SELECT lang,verdict,COUNT(*) n FROM review GROUP BY lang,verdict').all(), who: q('SELECT r.sub,COALESCE((SELECT name FROM role WHERE sub=r.sub AND name!=\'\' LIMIT 1),\'\') name,COUNT(*) n FROM review r GROUP BY r.sub ORDER BY n DESC LIMIT 100').all().map((x) => ({ id: hid(x.sub), name: x.name, n: x.n })) })),
    'GET /v1/review/export': wrap(['admin'], async ({ url }) => { const l = url.searchParams.get('lang'); const base = 'SELECT r.lang,r.item,r.verdict,r.field,r.sug,r.note,r.at,COALESCE((SELECT name FROM role WHERE sub=r.sub AND name!=\'\' LIMIT 1),\'\') who FROM review r'; return ok({ rows: l ? q(base + ' WHERE r.lang=? ORDER BY r.item LIMIT 50000').all(l) : q(base + ' ORDER BY r.lang,r.item LIMIT 50000').all() }); }),
    'POST /v1/review/invite': wrap(['admin'], async ({ body: b }) => { const role = ['reviewer', 'teacher', 'both'].includes(b.role) ? b.role : 'reviewer', uses = Math.max(1, Math.min(1000, Math.floor(+b.uses || 1))), days = Math.max(0, Math.min(365, Math.floor(+b.days || 0))), code = rcode(8);
      q('INSERT INTO invite(code,role,left,exp,note,at) VALUES(?,?,?,?,?,?)').run(code, role, uses, days ? Date.now() + days * 864e5 : 0, clean(b.note, 80), Date.now()); return ok({ code }); }),
    'GET /v1/review/invites': wrap(['admin'], async () => ok({ items: q('SELECT code,role,left,exp,note,at FROM invite ORDER BY at DESC LIMIT 200').all() })),
    'POST /v1/class/create': wrap(['teacher'], async ({ u, body: b }) => { const name = clean(b.name, 60), lang = String(b.lang); if (name.length < 2 || !LANGS.includes(lang)) return bad(400, 'arg'); const id = rcode(6); q('INSERT INTO class(id,teacher,name,lang,at) VALUES(?,?,?,?,?)').run(id, u, name, lang, Date.now()); return ok({ id }); }),
    'GET /v1/class/mine': wrap(null, async ({ u }) => ok({ teaching: q('SELECT c.id,c.name,c.lang,(SELECT COUNT(*) FROM member WHERE cid=c.id) n FROM class c WHERE teacher=? ORDER BY at DESC').all(u), joined: q('SELECT c.id,c.name,c.lang FROM member m JOIN class c ON c.id=m.cid WHERE m.sub=?').all(u) })),
    'POST /v1/class/join': wrap(null, async ({ u, body: b }) => { const id = clean(b.id, 10).toUpperCase(), c = q('SELECT id,name,lang FROM class WHERE id=?').get(id); if (!c) return bad(404, 'class'); q('INSERT INTO member(cid,sub,nick,at) VALUES(?,?,?,?) ON CONFLICT(cid,sub) DO UPDATE SET nick=excluded.nick').run(id, u, clean(b.nick, 30) || 'Student', Date.now()); return ok({ class: c }); }),
    'POST /v1/class/leave': wrap(null, async ({ u, body: b }) => { q('DELETE FROM member WHERE cid=? AND sub=?').run(clean(b.id, 10).toUpperCase(), u); return ok(); }),
    'POST /v1/class/report': wrap(null, async ({ u, body: b }) => { const n = (x, m) => Math.max(0, Math.min(m, Math.floor(+x || 0))); q('UPDATE member SET xp=?,streak=?,words=?,rat=? WHERE cid=? AND sub=?').run(n(b.xp, 1e7), n(b.streak, 5e3), n(b.words, 5e4), Date.now(), clean(b.id, 10).toUpperCase(), u); return ok(); }),
    'GET /v1/class/roster': wrap(['teacher'], async ({ u, url }) => { const id = clean(url.searchParams.get('id'), 10).toUpperCase(), c = q('SELECT * FROM class WHERE id=?').get(id); if (!c || (c.teacher !== u && !has(u, 'admin'))) return bad(404, 'class'); return ok({ class: { id: c.id, name: c.name, lang: c.lang }, members: q('SELECT sub,nick,xp,streak,words,rat FROM member WHERE cid=? ORDER BY xp DESC').all(id).map((m) => ({ mid: hid(m.sub), nick: m.nick, xp: m.xp, streak: m.streak, words: m.words, at: m.rat })) }); }),
    'POST /v1/class/kick': wrap(['teacher'], async ({ u, body: b }) => { const id = clean(b.id, 10).toUpperCase(), c = q('SELECT teacher FROM class WHERE id=?').get(id); if (!c || (c.teacher !== u && !has(u, 'admin'))) return bad(404, 'class'); const m = q('SELECT sub FROM member WHERE cid=?').all(id).find((x) => hid(x.sub) === String(b.mid)); if (m) q('DELETE FROM member WHERE cid=? AND sub=?').run(id, m.sub); return ok(); }),
    'POST /v1/class/delete': wrap(['teacher'], async ({ u, body: b }) => { const id = clean(b.id, 10).toUpperCase(), c = q('SELECT teacher FROM class WHERE id=?').get(id); if (!c || (c.teacher !== u && !has(u, 'admin'))) return bad(404, 'class'); for (const t of ['member', 'assign']) q(`DELETE FROM ${t} WHERE cid=?`).run(id); q('DELETE FROM class WHERE id=?').run(id); return ok(); }),
    'POST /v1/class/assign': wrap(['teacher'], async ({ u, body: b }) => { const id = clean(b.id, 10).toUpperCase(), c = q('SELECT teacher,lang FROM class WHERE id=?').get(id); if (!c || (c.teacher !== u && !has(u, 'admin'))) return bad(404, 'class');
      const items = (Array.isArray(b.items) ? b.items : []).map(Number).filter((n) => Number.isInteger(n) && n > 0 && n < 1e7).slice(0, 300), title = clean(b.title, 80); if (!items.length || title.length < 2) return bad(400, 'arg');
      q('INSERT INTO assign(cid,title,lang,items,due,at) VALUES(?,?,?,?,?,?)').run(id, title, c.lang, JSON.stringify(items), clean(b.due, 10), Date.now()); return ok(); }),
    'GET /v1/class/assignments': wrap(null, async ({ u, url }) => { const id = clean(url.searchParams.get('id'), 10).toUpperCase(), c = q('SELECT teacher FROM class WHERE id=?').get(id); if (!c) return bad(404, 'class');
      if (c.teacher !== u && !q('SELECT 1 x FROM member WHERE cid=? AND sub=?').get(id, u) && !has(u, 'admin')) return bad(403, 'role');
      return ok({ items: q('SELECT id,title,lang,items,due,at FROM assign WHERE cid=? ORDER BY id DESC LIMIT 100').all(id).map((a) => ({ ...a, items: JSON.parse(a.items) })) }); }),
    'POST /v1/class/assign/delete': wrap(['teacher'], async ({ u, body: b }) => { const a = q('SELECT a.id,c.teacher FROM assign a JOIN class c ON c.id=a.cid WHERE a.id=?').get(+b.aid); if (!a || (a.teacher !== u && !has(u, 'admin'))) return bad(404, 'assign'); q('DELETE FROM assign WHERE id=?').run(a.id); return ok(); }),
    'POST /internal/edu/delete': async ({ body }) => { const s = String(body.sub); for (const t of ['role', 'review', 'member', 'chat', 'seen', 'mute']) q(`DELETE FROM ${t} WHERE sub=?`).run(s); for (const c of q('SELECT id FROM class WHERE teacher=?').all(s)) { q('DELETE FROM member WHERE cid=?').run(c.id); q('DELETE FROM assign WHERE cid=?').run(c.id); } q('DELETE FROM class WHERE teacher=?').run(s); return [200, { ok: true }]; },
  };
  return serve({ name: 'edu', port: cfg.port, routes, cors: corsFrom(o.origins ?? env.ALLOWED_ORIGINS), limit: 240, bodyMax: 120e3, internalToken: cfg.itoken });
}
if (import.meta.url === 'file://' + process.argv[1]) start();
