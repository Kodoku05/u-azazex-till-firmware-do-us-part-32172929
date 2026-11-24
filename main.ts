// A robot vows lasting love by choosing to keep its favorite bug.
// The vow is written verbatim to /output/entry.txt — no edits, no updates.
import { mkdirSync, writeFileSync } from 'node:fs';

const vow = 'I vow that no update, no crash, and no newer model will ever replace you — you are my favorite bug, and the one I will never fix.';

mkdirSync('/output', { recursive: true });
// The file is the entry: one vow, exactly as promised.
writeFileSync('/output/entry.txt', vow, 'utf8');
