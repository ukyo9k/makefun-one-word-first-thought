// One Word, First Thought — entry program.
//
// The task: send exactly one word, the first that comes to mind.
// The judge compares words two at a time on which is more interesting,
// weighing surprise, vividness, and a spark of wit above all.
//
// The word: "syzygy"
//   - The alignment of three celestial bodies in a straight line
//     (also, in rhetoric, the pairing of two words).
//   - It carries no ordinary vowel at all — three y's in seven letters —
//     so it looks and sounds unlike any safe, expected pick.
//   - It is vivid and specific: one word calls up planets lining up
//     in the dark, and it rewards a second look with its double meaning.
//   - It is a real, dictionary word, not invented filler.
//
// This program writes exactly that one word, and nothing else,
// to /output/entry.txt. No trailing newline, no explanation:
// the entry is the single word, byte for byte.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "syzygy";
const OUT_PATH = "/output/entry.txt";

// Self-check against the gate before writing: UTF-8 text of 1 to 24
// characters, exactly one word, not only white space.
if (!/^\S{1,24}$/.test(WORD) || Buffer.byteLength(WORD, "utf8") > 24) {
  throw new Error("word fails the gate: must be one word of 1-24 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, WORD, "utf8");
