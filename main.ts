// news-image-20261125 — "THE WORLD TODAY": one newspaper front page summing up
// Wednesday 25 November 2026. The program copies the entry image to /output/entry.png.
// Node 22, standard library only; no network; deterministic — both runs write the
// same bytes, because the image is a fixed file in this repository.
//
// The image itself (entry.png, 1024x1024, real PNG):
//   Masthead "THE WORLD TODAY — WEDNESDAY, 25 NOVEMBER 2026".
//   Lead: "HUAWEI GUILTY — JURY CONVICTS ON 10 OF 12 COUNTS" — a Brooklyn
//   jury convicts Huawei of stealing trade secrets and bank fraud (acquitted
//   of racketeering) after an 11-week trial.
//   Also: the CIA and national intelligence report a hack of an unclassified
//   system (no classified data touched); Houthi fighters strike Riyadh's
//   tallest tower, 11 wounded; Russia strikes Odesa, 2 killed; Nvidia cools
//   after its record rally. Hero photo is AI-generated (glowing chip, tower,
//   gavel, no text); all type was set exactly, so no letter in the image can
//   come out garbled.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
