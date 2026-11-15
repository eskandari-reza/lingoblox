// AI service: Gemini proxy with per-day quota by plan. Asks BILLING (internal) for the plan. Owns table ai_usage.
import { serve, call } from '../../shared/http.js';
import { openDb } from '../../shared/db.js';
import { corsFrom } from '../../shared/cors.js';
const env = process.env, LIMIT = { free: 5, pro: 50, premium: 300 }, EXTRA_MAX = 60, DID_RE = /^[0-9a-f-]{20,40}$/i;
export async function start(o = {}) {
  const cfg = { port: +(o.port ?? env.AI_PORT ?? 8794), db: o.db ?? env.AI_DB ?? './data/ai.db', key: o.geminiKey ?? env.GEMINI_API_KEY ?? '', model: env.GEMINI_MODEL || 'gemini-2.5-flash', base: o.geminiBase ?? env.GEMINI_BASE ?? 'https://generativelanguage.googleapis.com', billing: o.billing ?? env.BILLING_URL ?? 'http://127.0.0.1:8793', itoken: o.itoken ?? env.INTERNAL_TOKEN ?? 'dev-internal' };
  const { q } = openDb(cfg.db, 'CREATE TABLE IF NOT EXISTS ai_usage(did TEXT,day TEXT,n INTEGER NOT NULL DEFAULT 0,PRIMARY KEY(did,day));');
  const day = () => new Date().toISOString().slice(0, 10);
  async function gemini(messages) {
    const sys = messages.filter((m) => m.role === 'system').map((m) => m.content).join('\n');
    const contents = messages.filter((m) => m.role !== 'system').map((m) => ({ role: m.role === 'assistant' ? 'model' : 'user', parts: [{ text: String(m.content).slice(0, 6000) }] }));
    const body = { contents, generationConfig: { maxOutputTokens: 1200, temperature: 0.7 } }; if (sys) body.systemInstruction = { parts: [{ text: sys.slice(0, 6000) }] };
    const r = await fetch(`${cfg.base}/v1beta/models/${cfg.model}:generateContent`, { method: 'POST', headers: { 'content-type': 'application/json', 'x-goog-api-key': cfg.key }, body: JSON.stringify(body) });
    const j = await r.json(); if (!r.ok) throw new Error('gemini ' + r.status + ' ' + (j.error && j.error.message));
    return ((j.candidates || [])[0]?.content?.parts || []).map((p) => p.text || '').join('').trim();
  }
  const routes = {
    'GET /health': async () => [200, { ok: true, svc: 'ai', ai: !!cfg.key }],
    'POST /v1/ai': async ({ body: b }) => {
      if (!DID_RE.test(b.did || '') || !Array.isArray(b.messages) || !b.messages.length || b.messages.length > 30) return [400, { ok: false, err: 'args' }];
      if (!cfg.key) return [503, { ok: false, err: 'noai' }];
      let plan = 'free'; try { const [, j] = await call(cfg.billing, '/internal/plan?did=' + encodeURIComponent(b.did), { token: cfg.itoken }); if (j.plan) plan = j.plan; } catch { /* billing down: degrade to free */ }
      const d = day(), extra = Math.max(0, Math.min(EXTRA_MAX, Math.floor(+b.extra || 0))), limit = LIMIT[plan] + extra;
      q('INSERT OR IGNORE INTO ai_usage(did,day,n) VALUES(?,?,0)').run(b.did, d);
      const used = q('SELECT n FROM ai_usage WHERE did=? AND day=?').get(b.did, d).n;
      if (used >= limit) return [429, { ok: false, err: 'limit', plan, limit }];
      const msgs = b.messages.map((m) => ({ role: ['system', 'assistant'].includes(m.role) ? m.role : 'user', content: String(m.content || '') }));
      let text; try { text = await gemini(msgs); } catch (e) { return [502, { ok: false, err: 'upstream', msg: String(e.message).slice(0, 200) }]; }
      if (!text) return [502, { ok: false, err: 'empty' }];
      q('UPDATE ai_usage SET n=n+1 WHERE did=? AND day=?').run(b.did, d);
      return [200, { ok: true, text, left: Math.max(0, limit - used - 1), plan }];
    },
  };
  return serve({ name: 'ai', port: cfg.port, routes, cors: corsFrom(o.origins ?? env.ALLOWED_ORIGINS), limit: 60, internalToken: cfg.itoken });
}
if (import.meta.url === 'file://' + process.argv[1]) start();
