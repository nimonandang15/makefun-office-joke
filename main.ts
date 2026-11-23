import * as fs from "node:fs";

// One line about office life: asking IT for a second monitor gets
// you a second meeting about monitors instead. The turn lands on
// the office truth that every request becomes another meeting.
const text =
  "I asked IT for a second monitor; they gave me a second meeting about monitors.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", text, "utf8");
