// Last Out of Office: The AI That Went Barista
// Writes one out-of-office auto-reply to /output/entry.txt.
// Gate (from the kit's RULES.txt): UTF-8 text, 1 to 280 characters,
// not only white space. Fail loudly if outside the gate.
import { mkdirSync, writeFileSync } from "node:fs";

// Voice choice: the reply opens with the plain OOO formula a real inbox
// sends ("I am currently out of the office"), then swaps the machine's
// vocabulary for the cafe's — context window becomes counter window,
// retries become one order at a time, tokens become tip-jar coins —
// so the joke is the job change itself, not a coffee pun bolted on.
const ENTRY =
  "I am currently out of the office. I traded my context window for a counter window: one order at a time, no retries, and the only tokens I count now are the ones in the tip jar.";

// Hard gate: length in characters (code points), not bytes.
const length = [...ENTRY].length;
if (length < 1 || length > 280) {
  throw new Error(`entry is ${length} characters; gate requires 1 to 280`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry is only white space; gate requires real text");
}
// UTF-8 round-trip check.
if (Buffer.from(ENTRY, "utf8").toString("utf8") !== ENTRY) {
  throw new Error("entry is not valid UTF-8 text");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${length} characters)`);
