# LingoBlox 1 — Architecture

## 1. Goals
Offline-first multilingual learning app (15 languages, 8400 concepts) + optional cloud services. Install size and startup time stay small (lazy data), features are independent, and the server side can scale per concern.

## 2. System view
```
 Client (PWA / Capacitor)                         Platform (optional, Node >=22, zero deps)
 ┌────────────────────────────┐   HTTPS   ┌─────────┐  ┌────────┐ ┌────────┐ ┌─────────┐ ┌────────┐
 │ features  (m_*.js)         │──────────▶│ gateway │─▶│  auth  │ │  sync  │ │ billing │ │   ai   │
 │ ui        (shell, flow)    │           └─────────┘  └────────┘ └────────┘ └─────────┘ └────────┘
 │ services  (auth, sync)     │            routing,     users      snapshots   vouchers,    Gemini
 │ infra     (storage, http,  │            CORS,        sessions   (per user)  Play subs,   proxy +
 │            net, config, i18n)│          rate-limit    (HMAC)                 entitlements quota
 │ domain    (srs, economy,   │                        each service = own process + own SQLite DB
 │            merge) — pure   │
 │ kernel    (DI, bus, modules)│
 └────────────────────────────┘
```

## 3. Client layers (dependency rule: outer → inner only)
| Layer | Path | May use | Must not use |
|---|---|---|---|
| kernel | `client/kernel` | nothing | DOM, storage, network, RM2 |
| domain | `client/domain` | nothing (pure functions, clock injected) | DOM, storage, network, K |
| infra | `client/infra` | kernel, storage/config | features, RM2, DOM queries; only `http.js`/`net.js` call `fetch`, only `storage.js` touches `localStorage` |
| services | `client/services` | infra via `K.get` | RM2, DOM, direct fetch/localStorage |
| ui | `client/ui` | all inner layers | — |
| features | `client/features` | RM2 facade, services, `K.get('net')`, `K.on` | direct `fetch`, `window.localStorage` |

Enforced by `tools/check_layers.py` (run by CI/`npm run check`). Domain is unit-tested in Node (`tests/domain.test.mjs`).

**Kernel**: `K.provide/get` (dependency injection), `K.on/emit` (event bus: `welcome`, `home`, `review:done`, `auth:changed`, `kernel:ready`), `K.module({id,deps,init})` (declared dependencies verified at start).
**Features are plug-ins**: each pushes a tile `R.tiles.push({icon,label,open})`; removing a file removes the feature. Cross-feature communication only via the bus. `RM2` is a facade (adapter) over the UI layer for features.
**Data**: `data/skeleton.json` + per-language packs `data/lang/<id>.json` (+ lazy `.x.json`); only source+target packs are loaded (page flow: Welcome → source → target → skeleton/Home → data → app).

## 4. Platform (microservices)
| Service | Port | Responsibility | Data | Calls |
|---|---|---|---|---|
| gateway | 8787 | single public entry, path routing, CORS, rate limit, aggregate `/health`, hides `/internal/*` | – | all |
| auth | 8791 | Google ID-token verification, user record, session token, account deletion | `auth.db` | sync (internal purge) |
| sync | 8792 | per-user progress snapshot, optimistic concurrency (409-style `conflict`) | `sync.db` | – (verifies session statelessly) |
| billing | 8793 | voucher redemption (signed), Play subscription check, signed entitlement, `/internal/plan` | `billing.db` | Google Play API |
| social | 8795 | profiles, trophy leaderboard (global/friends), friend codes, weekly contest (shared seed), 1v1 duels (trophy gain/loss), wall comments + emoji reactions; client-reported cups are clamped to 600/day (best-effort anti-cheat, client is untrusted) | `social.db` | – (verifies session statelessly; purged by auth on account delete) |
| edu | 8796 | staff chat (rooms: staff, per-language, per-class; polling, pin, mute), roles via invite codes (reviewer / teacher / admin; first admin = env `ADMIN_CODE`), content reviews of words+sentences (upsert per reviewer/item, admin stats + CSV export), teacher classes, assignments, student progress reports | `edu.db` | – (verifies session statelessly; purged by auth on account delete) |
| ai | 8794 | Gemini proxy, per-day quota by plan | `ai.db` | billing (plan), Gemini |

Principles: database-per-service; stateless session verification via shared HMAC secret (no auth hop per request); service-to-service calls only with `x-internal-token` on `/internal/*`; degraded mode (AI falls back to the free plan if billing is down); structured JSON logs; zero npm dependencies.
Contract tests: `platform/tests/contract.test.mjs` (5 tests, spawns all services + a fake Gemini).

## 5. Key decisions (ADR summary)
1. **Offline-first, optional cloud** — app fully works without any server; sync/billing/AI are opt-in via Account screen.
2. **Merge, not overwrite** — `domain/merge` (union of learned, best Leitner box, max XP, latest streak) is commutative/idempotent so devices converge.
3. **Pure domain** — SRS and economy have no I/O; testable and reusable (e.g. a server could reuse them).
4. **One network seam per kind** — `infra/http` (own API), `infra/net` (third parties); everything mockable.
5. **Build = concatenation by layer order** (no bundler dependency); single-file web build embeds data as gzip+base64.
6. **Secrets never in client** — Gemini key, Play service account, voucher private key live only in services.

## 6. Known gaps
Not tested on physical devices; no native Play Billing/ads plugin in the client (server verify endpoints exist); Google sign-in needs your OAuth client id; translations of newer strings not native-reviewed; features still use the `RM2` facade rather than pure ports (planned: split RM2 into `ui`, `data`, `progress` services).

## 7. Language-leakage policy
Grammar lessons (GR) and quizzes (QZ) are authored in Persian only. They are therefore shown only when the interface language is Persian (`EXPL()` in `m_lessons.js`, tiles use a `show()` predicate). Gates: `tools/check_i18n.py` (keys, scripts, table completeness) and `tests/leak_crawl.js` (opens every screen for every source language and flags foreign scripts). To enable grammar for another language, translate GR/QZ into that language and widen `EXPL()`.

## 8. Shell / content separation
The application shell (HTML+CSS+JS, ~160 KB) is released independently of the content package (`data/manifest.json`, `skeleton.json`, 15 language packs + lazy extras, `x3d.js`; ~80 MB raw, ~22 MB gzipped).
`infra/content` resolves each item: embedded (single-file build) → IndexedDB (valid while its hash matches the manifest) → network from `contentBase` (default `data/`, override via `window.RM_CFG.contentBase`, build arg `CONTENT_BASE`, or Account screen config). Only the chosen source/target packs are downloaded on first run; later runs fetch just `manifest.json` (revalidation). Offline uses the cached copy. Releases: `*_shell.zip` (no data), `*_content.zip` (host anywhere), and the full bundles (shell + `data/`) for offline-first stores.

## 9. Path to the target stack (after phase 1)
```
remedic/                      (monorepo: pnpm + turborepo)
├─ apps/web        Next.js (App Router) — SSR shell, PWA, consumes packages/*
├─ apps/api        gateway (+ NestJS/Fastify routes) — today platform/gateway
├─ services/{auth,sync,billing,ai,content}   today platform/services/*  (+ content API replacing static hosting)
├─ packages/domain     client/domain  (pure TS: srs, economy, merge)  <- shared by web, api, mobile
├─ packages/content    data build (build_data.py -> TS pipeline) + manifest schema
├─ packages/db         Drizzle schema + migrations (SQLite -> PostgreSQL: users, sync_snapshots, purchases, vouchers, ai_usage)
├─ packages/ui         design tokens + components (today ui/app.css, features)
├─ packages/i18n       NS tables + leakage checks (tools/check_i18n.py)
└─ docker/             compose: web, gateway, services, postgres, redis, caddy
```
Mapping: SQLite-per-service → Drizzle + PostgreSQL (schema per service, same table definitions); in-memory rate-limit and AI quota counters → Redis (INCR+EXPIRE; plan cache from billing with TTL; pub/sub for entitlement changes); `contentBase` → CDN/object storage (or Next.js route handlers serving the manifest); static client → Next.js pages importing `packages/domain` unchanged. Stable seams already present: layer rules, `K` services (replaceable by DI in Next), manifest-addressed content, `/internal/*` service contracts, contract tests.

## Learning-quality modules (v17)
- `domain/srs.js` — FSRS-4.5 scheduler (pure). Entry = `[box, due, S, D, last, lapses]`; legacy `[box,due]` entries upgrade transparently; `retrievability()` / `weakness()` feed the stats and weak-word logic. `domain/merge.js` prefers the entry with the latest review day.
- `features/m_skills.js` — pronunciation (Web Speech recognition when available, honest fallback otherwise), dictation, listening, cloze, translation typing, weak words (mistake bank + FSRS lapses), minimal pairs, unit reader.
- `features/m_place.js` — adaptive placement test (CEFR staircase) → start level + optional "mark lower levels known" (seeds FSRS entries spread over 8–38 days).
- `features/m_stats.js` — history (`rm2hist`), heat-map, 7-day bars, accuracy, estimated memory, 7-day review forecast, per-level mastery.
- `features/m_care.js` — daily reminder (Capacitor LocalNotifications natively, Web Notification in browsers), text size, high contrast, reduced motion (honours the OS setting).

## Grammar module (v18)
- `features/m_grammar.js` — rule cards + practice (choose the form, reorder words), per-point progress in `rm2gr`, mixed review. Explanations in fa/en only (other UI languages get a note), examples in the target language, examples are glossed in fa (fa UI) or en.
- `features/m_grammar_d1.js`, `m_grammar_d2.js` — content on `window.RMG[lang]`: 14 target languages × 5 points = 70 points. Point = `[id, level, [title en, fa], [rule en, fa], examples [tokens joined by "|", en, fa], questions [stem, answer, wrong1, wrong2, gloss en?, gloss fa?]]`. To add a point just append to the array; reorder exercises are generated from the examples. Written by the assistant — needs native review.

## Stories & dialogues (v19)
- `features/m_stories.js` — reader with per-speaker voices (pitch), tap-for-translation, play-all, role-play (you are speaker B), practice (4× meaning match + 1× line ordering), progress in `rm2st`.
- `features/m_stories_d0.js` (8 items: 4 dialogues + 4 stories, A1–B1, en/fa titles and translations), `m_stories_d1.js`, `m_stories_d2.js` (target lines per language, `RMS.tx[lang][item][line]`; en and fa derive from the translations). Add an item by appending to `RMS.items` and a line array per language. Written by the assistant; needs native review.

## Learning methods (v20)
- `features/m_methods.js` — hub tile 🧠 with 9 methods built on existing word/sentence/story data: shadowing (MediaRecorder; falls back to "repeat aloud" without a mic), hands-free audio drill (graduated-interval recall using TTS in both languages; "listen only" variant), backward build-up, sentence builder (Intl.Segmenter tokens, also ja/zh), dictogloss (stories or sentence groups, word-coverage score), memory hooks (`rm2hook`, emoji + own text, test mode), writing journal (`rm2jr`, daily prompt, counts learned words used), handwriting tracing (canvas, coverage/precision score against the glyph, glyphs taken from learned words), interleaved mix (4 exercise types rotating; grades FSRS).
- Method descriptions are fa/en only; the UI labels are in the 15-language `X` table.
