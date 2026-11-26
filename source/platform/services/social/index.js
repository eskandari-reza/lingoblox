// SOCIAL service: profiles, trophies leaderboard, friends, weekly contest, 1v1 duels, wall comments + reactions. Owns social.db.
import crypto from 'node:crypto';
import { serve } from '../../shared/http.js';
import { openDb } from '../../shared/db.js';
import { verify } from '../../shared/session.js';
import { corsFrom } from '../../shared/cors.js';
const env = process.env;
const SCHEMA = `
CREATE TABLE IF NOT EXISTS profile(sub TEXT PRIMARY KEY,nick TEXT,avatar TEXT,country TEXT,code TEXT UNIQUE,cups INTEGER DEFAULT 0,duel INTEGER DEFAULT 0,day TEXT,dayc INTEGER DEFAULT 0,at INTEGER);
CREATE TABLE IF NOT EXISTS friend(a TEXT,b TEXT,st TEXT,at INTEGER,PRIMARY KEY(a,b));
CREATE TABLE IF NOT EXISTS cscore(cid TEXT,sub TEXT,score INTEGER,ms INTEGER,at INTEGER,PRIMARY KEY(cid,sub));
CREATE TABLE IF NOT EXISTS duel(id TEXT PRIMARY KEY,a TEXT,b TEXT,seed TEXT,st TEXT,sa INTEGER,sb INTEGER,ma INTEGER,mb INTEGER,win TEXT,da INTEGER,db INTEGER,at INTEGER);
CREATE TABLE IF NOT EXISTS wall(id INTEGER PRIMARY KEY AUTOINCREMENT,t TEXT,sub TEXT,txt TEXT,at INTEGER);
CREATE TABLE IF NOT EXISTS react(t TEXT,sub TEXT,e TEXT,PRIMARY KEY(t,sub));
CREATE INDEX IF NOT EXISTS wall_t ON wall(t,id);`;
const EMO = ['👍', '❤️', '🔥', '👏', '😂', '🎉'];
const day = (d = Date.now()) => new Date(d).toISOString().slice(0, 10);
export function weekId(d = Date.now()) { const t = new Date(d), u = new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate())); const n = u.getUTCDay() || 7; u.setUTCDate(u.getUTCDate() + 4 - n); const y0 = new Date(Date.UTC(u.getUTCFullYear(), 0, 1)); return u.getUTCFullYear() + 'w' + String(Math.ceil(((u - y0) / 864e5 + 1) / 7)).padStart(2, '0'); }
const weekEnd = (d = Date.now()) => { const t = new Date(d), n = t.getUTCDay() || 7; return Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate() + (8 - n)); };
const clean = (s, n) => String(s ?? '').replace(/[\u0000-\u001f<>]/g, '').trim().slice(0, n);
export async function start(o = {}) {
  const cfg = { port: +(o.port ?? env.SOCIAL_PORT ?? 8795), db: o.db ?? env.SOCIAL_DB ?? './data/social.db', secret: o.secret ?? env.SESSION_SECRET ?? 'dev-secret', itoken: o.itoken ?? env.INTERNAL_TOKEN ?? 'dev-internal' };
  const { q } = openDb(cfg.db, SCHEMA);
  const who = (req) => verify(cfg.secret, req.headers.authorization);
  const code = () => crypto.randomBytes(4).toString('hex').toUpperCase();
  const mk = (sub) => { let p = q('SELECT * FROM profile WHERE sub=?').get(sub); if (!p) { q('INSERT INTO profile(sub,nick,avatar,country,code,at) VALUES(?,?,?,?,?,?)').run(sub, 'Learner' + crypto.randomInt(1000, 9999), '🙂', '', code(), Date.now()); p = q('SELECT * FROM profile WHERE sub=?').get(sub); } return p; };
  const pub = (p) => ({ id: p.sub.slice(0, 0) + crypto.createHash('sha1').update(p.sub).digest('hex').slice(0, 10), nick: p.nick, avatar: p.avatar, country: p.country, total: p.cups + p.duel, cups: p.cups, duel: p.duel });
  const byId = (id) => q('SELECT * FROM profile').all().find((p) => pub(p).id === id);
  const ok = (x = {}) => [200, { ok: true, ...x }], bad = (c, e) => [c, { ok: false, err: e }];
  const friendsOf = (sub) => q("SELECT CASE WHEN a=? THEN b ELSE a END AS f FROM friend WHERE (a=? OR b=?) AND st='ok'").all(sub, sub, sub).map((r) => r.f);
  const wrap = (fn) => async (c) => { const u = who(c.req); if (!u) return bad(401, 'auth'); return fn({ ...c, u }); };
  const routes = {
    'GET /health': async () => [200, { ok: true, svc: 'social' }],
    'GET /v1/social/me': wrap(async ({ u }) => { const p = mk(u); return ok({ me: { ...pub(p), code: p.code } }); }),
    'POST /v1/social/profile': wrap(async ({ u, body: b }) => { mk(u); const nick = clean(b.nick, 20), av = clean(b.avatar, 4), cc = clean(b.country, 2).toUpperCase();
      if (nick.length < 2) return bad(400, 'nick'); q('UPDATE profile SET nick=?,avatar=COALESCE(NULLIF(?,\'\'),avatar),country=? WHERE sub=?').run(nick, av, cc, u); return ok(); }),
    // client reports activity trophies; server accepts only bounded growth (anti-cheat is best-effort: the client is untrusted)
    'POST /v1/social/report': wrap(async ({ u, body: b }) => { const p = mk(u), c = Math.max(0, Math.min(1e6, Math.floor(+b.cups || 0))), d = day(); let used = p.day === d ? p.dayc : 0;
      const room = Math.max(0, 600 - used), inc = Math.min(Math.max(0, c - p.cups), room), n = p.cups + inc;
      q('UPDATE profile SET cups=?,day=?,dayc=?,at=? WHERE sub=?').run(n, d, used + inc, Date.now(), u); const r = q('SELECT * FROM profile WHERE sub=?').get(u); return ok({ me: pub(r) }); }),
    'GET /v1/social/top': wrap(async ({ u, url }) => { const sc = url.searchParams.get('scope') || 'global', lim = Math.min(100, +url.searchParams.get('limit') || 50); let rows = q('SELECT * FROM profile').all();
      if (sc === 'friends') { const f = new Set([...friendsOf(u), u]); rows = rows.filter((p) => f.has(p.sub)); }
      rows.sort((a, b) => (b.cups + b.duel) - (a.cups + a.duel)); const me = pub(mk(u)); const list = rows.slice(0, lim).map((p, i) => ({ rank: i + 1, ...pub(p), me: p.sub === u }));
      const mine = rows.findIndex((p) => p.sub === u); return ok({ list, rank: mine + 1, me }); }),
    'POST /v1/social/friend': wrap(async ({ u, body: b }) => { const t = q('SELECT * FROM profile WHERE code=?').get(clean(b.code, 12).toUpperCase()); if (!t) return bad(404, 'code'); if (t.sub === u) return bad(400, 'self');
      const ex = q('SELECT * FROM friend WHERE (a=? AND b=?) OR (a=? AND b=?)').get(u, t.sub, t.sub, u); if (ex) { if (ex.st === 'pend' && ex.b === u) { q("UPDATE friend SET st='ok' WHERE a=? AND b=?").run(ex.a, ex.b); return ok({ st: 'ok' }); } return ok({ st: ex.st }); }
      q("INSERT INTO friend(a,b,st,at) VALUES(?,?,'pend',?)").run(u, t.sub, Date.now()); return ok({ st: 'pend' }); }),
    'POST /v1/social/friend/accept': wrap(async ({ u, body: b }) => { const p = byId(String(b.id)); if (!p) return bad(404, 'nf'); const r = q("UPDATE friend SET st='ok' WHERE a=? AND b=? AND st='pend'").run(p.sub, u); return r.changes ? ok() : bad(404, 'nf'); }),
    'POST /v1/social/friend/remove': wrap(async ({ u, body: b }) => { const p = byId(String(b.id)); if (!p) return bad(404, 'nf'); q('DELETE FROM friend WHERE (a=? AND b=?) OR (a=? AND b=?)').run(u, p.sub, p.sub, u); return ok(); }),
    'GET /v1/social/friends': wrap(async ({ u }) => { const rows = q('SELECT * FROM friend WHERE a=? OR b=?').all(u, u), out = { friends: [], incoming: [], outgoing: [] };
      for (const r of rows) { const other = r.a === u ? r.b : r.a, p = q('SELECT * FROM profile WHERE sub=?').get(other); if (!p) continue; const x = pub(p);
        if (r.st === 'ok') out.friends.push(x); else if (r.a === u) out.outgoing.push(x); else out.incoming.push(x); } out.friends.sort((a, b) => b.total - a.total); return ok(out); }),
    // weekly contest: everybody gets the same seed; best score counts
    'GET /v1/social/contest': wrap(async ({ u }) => { const id = weekId(), top = q('SELECT c.score,c.ms,p.* FROM cscore c JOIN profile p ON p.sub=c.sub WHERE c.cid=? ORDER BY c.score DESC,c.ms ASC LIMIT 20').all(id).map((r, i) => ({ rank: i + 1, score: r.score, ms: r.ms, ...pub(r), me: r.sub === u }));
      const mine = q('SELECT score,ms FROM cscore WHERE cid=? AND sub=?').get(id, u); return ok({ id, seed: 'rm2-' + id, ends: weekEnd(), top, mine: mine || null, players: q('SELECT COUNT(*) n FROM cscore WHERE cid=?').get(id).n }); }),
    'POST /v1/social/contest/score': wrap(async ({ u, body: b }) => { mk(u); const id = weekId(); if (b.id !== id) return bad(400, 'closed'); const s = Math.max(0, Math.min(1500, Math.floor(+b.score || 0))), ms = Math.max(0, Math.min(36e5, Math.floor(+b.ms || 0)));
      const cur = q('SELECT score,ms FROM cscore WHERE cid=? AND sub=?').get(id, u); if (cur && (cur.score > s || (cur.score === s && cur.ms <= ms))) return ok({ kept: true, best: cur });
      q('INSERT INTO cscore(cid,sub,score,ms,at) VALUES(?,?,?,?,?) ON CONFLICT(cid,sub) DO UPDATE SET score=excluded.score,ms=excluded.ms,at=excluded.at').run(id, u, s, ms, Date.now()); return ok({ kept: false, best: { score: s, ms } }); }),
    // duels: challenger creates, both play the same seed, higher score wins trophies
    'POST /v1/social/duel': wrap(async ({ u, body: b }) => { const t = byId(String(b.to)); if (!t || t.sub === u) return bad(404, 'nf'); if (!friendsOf(u).includes(t.sub)) return bad(403, 'friends');
      if (q("SELECT COUNT(*) n FROM duel WHERE st!='done' AND ((a=? AND b=?) OR (a=? AND b=?))").get(u, t.sub, t.sub, u).n) return bad(409, 'open');
      const id = crypto.randomBytes(6).toString('hex'); q("INSERT INTO duel(id,a,b,seed,st,at) VALUES(?,?,?,?,'open',?)").run(id, u, t.sub, 'd-' + id, Date.now()); return ok({ id }); }),
    'GET /v1/social/duels': wrap(async ({ u }) => { const rows = q('SELECT * FROM duel WHERE a=? OR b=? ORDER BY at DESC LIMIT 30').all(u, u);
      return ok({ list: rows.map((d) => { const meA = d.a === u, opp = q('SELECT * FROM profile WHERE sub=?').get(meA ? d.b : d.a); return { id: d.id, seed: d.seed, st: d.st, opp: pub(opp), mine: meA ? d.sa : d.sb, theirs: d.st === 'done' ? (meA ? d.sb : d.sa) : null, played: (meA ? d.sa : d.sb) != null, win: d.st === 'done' ? (d.win === 'draw' ? 'draw' : d.win === u ? 'me' : 'opp') : null, delta: d.st === 'done' ? (meA ? d.da : d.db) : null, at: d.at }; }) }); }),
    'POST /v1/social/duel/play': wrap(async ({ u, body: b }) => { const d = q('SELECT * FROM duel WHERE id=?').get(String(b.id)); if (!d || (d.a !== u && d.b !== u)) return bad(404, 'nf'); if (d.st === 'done') return bad(409, 'done');
      const meA = d.a === u; if ((meA ? d.sa : d.sb) != null) return bad(409, 'played'); const s = Math.max(0, Math.min(1500, Math.floor(+b.score || 0))), ms = Math.max(0, Math.min(36e5, Math.floor(+b.ms || 0)));
      q(`UPDATE duel SET ${meA ? 'sa=?,ma=?' : 'sb=?,mb=?'} WHERE id=?`).run(s, ms, d.id); const r = q('SELECT * FROM duel WHERE id=?').get(d.id);
      if (r.sa != null && r.sb != null) { let win = 'draw'; if (r.sa !== r.sb) win = r.sa > r.sb ? r.a : r.b; else if (r.ma !== r.mb) win = r.ma < r.mb ? r.a : r.b;
        const pa = q('SELECT * FROM profile WHERE sub=?').get(r.a), pb = q('SELECT * FROM profile WHERE sub=?').get(r.b); const ta = pa.cups + pa.duel, tb = pb.cups + pb.duel;
        const gain = (w, l) => Math.max(10, Math.min(40, 25 + Math.round((l - w) / 100))), lose = (w, l) => -Math.max(5, Math.min(25, Math.round(gain(w, l) * .6)));
        let da = 0, db = 0; if (win === r.a) { da = gain(ta, tb); db = Math.max(lose(ta, tb), -tb); } else if (win === r.b) { db = gain(tb, ta); da = Math.max(lose(tb, ta), -ta); }
        q("UPDATE duel SET st='done',win=?,da=?,db=? WHERE id=?").run(win, da, db, r.id); q('UPDATE profile SET duel=duel+? WHERE sub=?').run(da, r.a); q('UPDATE profile SET duel=duel+? WHERE sub=?').run(db, r.b);
        return ok({ done: true, win: win === 'draw' ? 'draw' : win === u ? 'me' : 'opp', delta: meA ? da : db }); }
      return ok({ done: false }); }),
    // wall: comments + emoji reactions on a contest ('c:<id>'), a duel ('d:<id>') or a profile ('p:<id>')
    'GET /v1/social/wall': wrap(async ({ url }) => { const t = clean(url.searchParams.get('t'), 40); if (!/^[cdp]:[\w-]+$/.test(t)) return bad(400, 't');
      const list = q('SELECT w.id,w.txt,w.at,p.* FROM wall w JOIN profile p ON p.sub=w.sub WHERE w.t=? ORDER BY w.id DESC LIMIT 50').all(t).map((r) => ({ id: r.id, txt: r.txt, at: r.at, by: pub(r) }));
      const rc = {}; q('SELECT e,COUNT(*) n FROM react WHERE t=? GROUP BY e').all(t).forEach((r) => rc[r.e] = r.n); return ok({ list, react: rc }); }),
    'POST /v1/social/wall': wrap(async ({ u, body: b }) => { mk(u); const t = clean(b.t, 40), txt = clean(b.text, 280); if (!/^[cdp]:[\w-]+$/.test(t) || !txt) return bad(400, 'arg');
      const recent = q('SELECT COUNT(*) n FROM wall WHERE sub=? AND at>?').get(u, Date.now() - 60e3).n; if (recent >= 5) return bad(429, 'rate');
      q('INSERT INTO wall(t,sub,txt,at) VALUES(?,?,?,?)').run(t, u, txt, Date.now()); return ok(); }),
    'POST /v1/social/react': wrap(async ({ u, body: b }) => { mk(u); const t = clean(b.t, 40), e = String(b.e); if (!/^[cdp]:[\w-]+$/.test(t) || !EMO.includes(e)) return bad(400, 'arg');
      const cur = q('SELECT e FROM react WHERE t=? AND sub=?').get(t, u); if (cur && cur.e === e) q('DELETE FROM react WHERE t=? AND sub=?').run(t, u); else q('INSERT INTO react(t,sub,e) VALUES(?,?,?) ON CONFLICT(t,sub) DO UPDATE SET e=excluded.e').run(t, u, e); return ok(); }),
    'POST /internal/social/delete': async ({ body }) => { const s = String(body.sub); for (const t of ['profile', 'cscore', 'wall', 'react']) q(`DELETE FROM ${t} WHERE sub=?`).run(s); q('DELETE FROM friend WHERE a=? OR b=?').run(s, s); return [200, { ok: true }]; },
  };
  return serve({ name: 'social', port: cfg.port, routes, cors: corsFrom(o.origins ?? env.ALLOWED_ORIGINS), limit: 240, bodyMax: 8e3, internalToken: cfg.itoken });
}
if (import.meta.url === 'file://' + process.argv[1]) start();
