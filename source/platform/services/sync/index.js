// SYNC service: per-user progress snapshot with optimistic concurrency. Verifies sessions statelessly. Owns table `sync`.
import { serve } from '../../shared/http.js';
import { openDb } from '../../shared/db.js';
import { verify } from '../../shared/session.js';
import { corsFrom } from '../../shared/cors.js';
const env = process.env, MAX = 400e3;
export async function start(o = {}) {
  const cfg = { port: +(o.port ?? env.SYNC_PORT ?? 8792), db: o.db ?? env.SYNC_DB ?? './data/sync.db', secret: o.secret ?? env.SESSION_SECRET ?? 'dev-secret', itoken: o.itoken ?? env.INTERNAL_TOKEN ?? 'dev-internal' };
  const { q } = openDb(cfg.db, 'CREATE TABLE IF NOT EXISTS sync(sub TEXT PRIMARY KEY,data TEXT,at INTEGER);');
  const routes = {
    'GET /health': async () => [200, { ok: true, svc: 'sync' }],
    'GET /v1/sync': async ({ req }) => { const u = verify(cfg.secret, req.headers.authorization); if (!u) return [401, { ok: false, err: 'auth' }];
      const r = q('SELECT data,at FROM sync WHERE sub=?').get(u); return [200, { ok: true, data: r ? JSON.parse(r.data) : null, at: r ? r.at : 0 }]; },
    'PUT /v1/sync': async ({ req, body: b }) => {
      const u = verify(cfg.secret, req.headers.authorization); if (!u) return [401, { ok: false, err: 'auth' }];
      if (!b || typeof b.data !== 'object' || b.data === null) return [400, { ok: false, err: 'data' }];
      const j = JSON.stringify(b.data); if (j.length > MAX) return [413, { ok: false, err: 'big' }];
      const cur = q('SELECT at FROM sync WHERE sub=?').get(u);
      if (cur && b.base !== undefined && +b.base < cur.at && !b.force) return [200, { ok: false, err: 'conflict', at: cur.at }];
      const at = Date.now(); q('INSERT INTO sync(sub,data,at) VALUES(?,?,?) ON CONFLICT(sub) DO UPDATE SET data=excluded.data,at=excluded.at').run(u, j, at); return [200, { ok: true, at }]; },
    'POST /internal/sync/delete': async ({ body }) => { q('DELETE FROM sync WHERE sub=?').run(String(body.sub)); return [200, { ok: true }]; },
  };
  return serve({ name: 'sync', port: cfg.port, routes, cors: corsFrom(o.origins ?? env.ALLOWED_ORIGINS), limit: 120, bodyMax: MAX + 2e3, internalToken: cfg.itoken });
}
if (import.meta.url === 'file://' + process.argv[1]) start();
