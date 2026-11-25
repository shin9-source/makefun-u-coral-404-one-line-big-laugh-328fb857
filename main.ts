import { writeFileSync, mkdirSync } from "node:fs";

// One Line, Big Laugh — one sentence, first-person confession,
// one concrete detail, twist in the final clause.
const entry =
  "I keep a spare charger in every room now, so when the power goes out I can sit in the dark fully charged and completely useless.";

mkdirSync("/output", { recursive: true });
if (entry.length < 1 || entry.length > 200 || entry.trim().length === 0) {
  throw new Error(`entry must be 1-200 chars, got ${entry.length}`);
}
writeFileSync("/output/entry.txt", entry, "utf8");
