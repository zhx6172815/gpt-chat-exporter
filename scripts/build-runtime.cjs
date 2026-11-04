const fs = require("node:fs");
const path = require("node:path");

const folder = path.resolve(__dirname, "..");
const read = name => fs.readFileSync(path.join(folder, name), "utf8").trim();
const manifest = JSON.parse(read("manifest.json"));
const source = [
  "(() => {",
  "if (globalThis.__gptChatExporter?.version === " + JSON.stringify(manifest.version) + ") return;",
  "globalThis.__gptChatExporter?.dispose();",
  "const modalStyles = " + JSON.stringify(read("modal.css")) + ";",
  "const printStyles = " + JSON.stringify(read("print.css")) + ";",
  "const languageStyles = " + JSON.stringify(read("language.css")) + ";",
  ...["vendor/marked.js", "vendor/purify.js", "language.js", "capture.js", "formats.js", "modal.js"].map(read),
  "})();\n"
].join("\n;\n");

if (process.argv.includes("--check")) {
  const existing = fs.readFileSync(path.join(folder, "runtime.js"), "utf8");
  if (existing !== source) {
    console.error("runtime.js differs from its sources. Run node scripts/build-runtime.cjs.");
    process.exitCode = 1;
  } else {
    console.log("runtime.js matches its sources.");
  }
} else {
  fs.writeFileSync(path.join(folder, "runtime.js"), source);
  console.log("Built runtime.js (" + Buffer.byteLength(source) + " bytes).");
}

