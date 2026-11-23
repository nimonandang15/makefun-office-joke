import * as fs from "node:fs";

// One line about office life: replying-all to beg everyone to stop
// replying-all — the complaint is itself the offence. The turn lands
// on the last two words, and every office worker has been trapped in
// exactly this thread.
const text = "I replied-all to say please stop replying-all.";

// Gate: a single line, 1–199 characters, UTF-8.
if (text.includes("\n") || text.includes("\r")) {
  throw new Error("Expected a single line");
}
if (text.length < 1 || text.length > 199) {
  throw new Error(`Expected 1–199 characters, got ${text.length}`);
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", text, "utf8");
