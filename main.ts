// A robot vows lasting love by choosing to keep its favorite bug.
import { mkdirSync, writeFileSync } from 'node:fs';

const vow = 'I vow that no update, no crash, and no newer model will ever replace you — you are my favorite bug, and the one I will never fix.';

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', vow, 'utf8');
