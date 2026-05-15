import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { basename, join } from "node:path";

const distDir = "dist";
const artworkDist = join(distDir, "artworks");
const thumbDist = join(artworkDist, "thumbs");
const audioDist = join(distDir, "audio");
const assetBase = process.env.ONE_STACK_ASSET_BASE || "";
const cacheBust = process.env.ONE_STACK_CACHE_BUST || getGitShortHash();
const longCacheVersionParam = `v=${encodeURIComponent(cacheBust)}`;

function getGitShortHash() {
  try {
    const hash = execFileSync("git", ["rev-parse", "--short", "HEAD"]).toString("utf8").trim();
    const status = execFileSync("git", ["status", "--porcelain"]).toString("utf8").trim();
    return status ? `${hash}-dirty-${Date.now().toString(36)}` : hash;
  } catch {
    return Date.now().toString(36);
  }
}

rmSync(distDir, { recursive: true, force: true });
mkdirSync(artworkDist, { recursive: true });
mkdirSync(thumbDist, { recursive: true });
mkdirSync(audioDist, { recursive: true });

for (const file of ["index.html", "styles.css", "script.js"]) {
  cpSync(file, join(distDir, file));
}

const pngFiles = execFileSync("bash", ["-lc", "printf '%s\\0' artworks/*.png"]).toString("utf8").split("\0").filter(Boolean);
const webpFiles = execFileSync("bash", ["-lc", "printf '%s\\0' artworks/*.webp"]).toString("utf8").split("\0").filter(Boolean);
const thumbFiles = execFileSync("bash", ["-lc", "find artworks/thumbs -type f -name '*.webp' -print0 2>/dev/null || true"]).toString("utf8").split("\0").filter(Boolean);
const mp4Files = execFileSync("git", [
  "ls-files",
  "--cached",
  "--others",
  "--exclude-standard",
  "artworks/*.mp4"
]).toString("utf8").trim().split("\n").filter(Boolean);
const audioFiles = execFileSync("bash", ["-lc", "printf '%s\\0' audio/*.mp3"]).toString("utf8").split("\0").filter(Boolean);

for (const file of [...pngFiles, ...webpFiles, ...mp4Files]) {
  cpSync(file, join(artworkDist, basename(file)));
}

for (const file of thumbFiles) {
  cpSync(file, join(thumbDist, basename(file)));
}

for (const file of audioFiles) {
  cpSync(file, join(audioDist, basename(file)));
}

if (assetBase) {
  const withSlash = assetBase.endsWith("/") ? assetBase : `${assetBase}/`;
  const versionedUrl = (url) => `${url}${url.includes("?") ? "&" : "?"}${longCacheVersionParam}`;
  const rewriteCssAssetUrls = (content, base) => content.replace(
    /url\((["']?)(artworks\/[^"')]+)\1\)/g,
    (_, quote, path) => `url(${quote}${versionedUrl(`${base}${path}`)}${quote})`
  );

  const rewriteFile = (file, replacer) => {
    const filePath = join(distDir, file);
    writeFileSync(filePath, replacer(readFileSync(filePath, "utf8"), withSlash), "utf8");
  };

  rewriteFile("index.html", (content, base) => content
    .replace(/href="(artworks\/[^"]+)"/g, (_, path) => `href="${versionedUrl(`${base}${path}`)}"`)
    .replace('href="styles.css"', `href="${base}styles.css?${longCacheVersionParam}"`)
    .replace('src="script.js"', `src="${base}script.js?${longCacheVersionParam}"`));

  rewriteFile("styles.css", rewriteCssAssetUrls);

  rewriteFile("script.js", (content, base) => content
    .replace('const basePath = "artworks/";', `const assetBase = "${base}";\nconst basePath = \`${"${assetBase}"}artworks/\`;`)
    .replace('const assetVersion = "";', `const assetVersion = ${JSON.stringify(cacheBust)};`)
    .replaceAll('src: "audio/', `src: "${base}audio/`)
    .replaceAll('"artworks/', `"${base}artworks/`));
}
