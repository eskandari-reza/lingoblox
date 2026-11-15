// Dev launcher: all services in one process (production runs each as its own container, see docker-compose.yml)
import { start as auth } from './services/auth/index.js';
import { start as sync } from './services/sync/index.js';
import { start as billing } from './services/billing/index.js';
import { start as ai } from './services/ai/index.js';
import { start as social } from './services/social/index.js';
import { start as gateway } from './gateway/index.js';
await Promise.all([auth(), sync(), billing(), ai(), social()]); await gateway();
