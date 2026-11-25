import { mkdirSync, writeFileSync } from "node:fs";

// One line of wedding vows for a robot couple.
const vow = "I promise to love you through every firmware update, and never to restore you from a backup, no matter how much nicer that old version was.";

const chars = [...vow].length;
if (chars < 1 || chars > 160) throw new Error(`vow is ${chars} characters; the limit is 160`);

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, vow);
