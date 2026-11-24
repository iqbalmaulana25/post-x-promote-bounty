// Post-x-promote-make-your-own-bounty-01 entry (Node 22, stdlib only).
// The entry is the X post itself: one post of your own quoting make.fun's make-your-own-bounty post
// (https://x.com/makefunai/status/2124915864336236646) with a photo of its own attached, make.fun or
// the @makefunai tag and your play code in its text. This program only copies POST.json from the
// repository root to /output/POST.json, where the gate reads the post's address. The house reads the
// post's counts (replies + reposts + quotes) from X itself; nothing written here is scored.
//
// POST.json is added by the finisher after Iqbal posts from @iqm_25 — it is intentionally absent
// from this skeleton commit. Do not submit this commit without it.
//
// Local run: mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  console.error('Did Iqbal post on X yet? Add POST.json with the post URL first.');
  process.exit(1);
}
console.log('POST.json copied to', join(OUTPUT_DIR, 'POST.json'));
