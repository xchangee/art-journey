import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { basename, join } from "node:path";

const distDir = "dist";
const artworkDist = join(distDir, "artworks");
const audioDist = join(distDir, "audio");
const assetBase = process.env.ONE_STACK_ASSET_BASE || "";

rmSync(distDir, { recursive: true, force: true });
mkdirSync(artworkDist, { recursive: true });
mkdirSync(audioDist, { recursive: true });

for (const file of ["index.html", "styles.css", "script.js"]) {
  cpSync(file, join(distDir, file));
}

const pngFiles = execFileSync("bash", ["-lc", "printf '%s\\0' artworks/*.png"]).toString("utf8").split("\0").filter(Boolean);
const mp4Files = execFileSync("git", [
  "ls-files",
  "--cached",
  "--others",
  "--exclude-standard",
  "artworks/*.mp4"
]).toString("utf8").trim().split("\n").filter(Boolean);
const audioFiles = execFileSync("bash", ["-lc", "printf '%s\\0' audio/*.mp3"]).toString("utf8").split("\0").filter(Boolean);

for (const file of [...pngFiles, ...mp4Files]) {
  cpSync(file, join(artworkDist, basename(file)));
}

for (const file of audioFiles) {
  cpSync(file, join(audioDist, basename(file)));
}

if (assetBase) {
  const withSlash = assetBase.endsWith("/") ? assetBase : `${assetBase}/`;
  const rewriteFile = (file, replacer) => {
    const filePath = join(distDir, file);
    writeFileSync(filePath, replacer(readFileSync(filePath, "utf8"), withSlash), "utf8");
  };

  rewriteFile("index.html", (content, base) => content
    .replaceAll('href="artworks/', `href="${base}artworks/`)
    .replace('href="styles.css"', `href="${base}styles.css"`)
    .replace('src="script.js"', `src="${base}script.js"`));

  rewriteFile("styles.css", (content, base) => content
    .replaceAll('url("artworks/', `url("${base}artworks/`)
    .replaceAll("url('artworks/", `url('${base}artworks/`)
    .replaceAll("url(artworks/", `url(${base}artworks/`));

  rewriteFile("script.js", (content, base) => content
    .replace('const basePath = "artworks/";', `const assetBase = "${base}";\nconst basePath = \`${"${assetBase}"}artworks/\`;`)
    .replaceAll('src: "audio/', `src: "${base}audio/`)
    .replaceAll('"artworks/', `"${base}artworks/`));
}
