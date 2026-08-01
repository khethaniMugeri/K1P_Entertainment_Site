// webp.js
// -----------------------------------------------------------------------------
// A tiny BUILD-TIME helper for serving WebP images with a safe fallback.
//
// Given a normal image path like "/images/equipment/sound-system.jpg", it returns
// the matching ".webp" path — but ONLY if:
//   1. a .webp file actually exists in public/ (so a <source> is never broken —
//      <picture> does NOT fall back on a 404, only on unsupported format), and
//   2. that .webp is genuinely SMALLER than the original (it isn't for some small
//      flat-colour / transparent logos, where palette PNG already wins).
//
// If either check fails, it returns null and the component just uses the original
// image. Run `node scripts/optimize-images.mjs` to (re)generate the .webp files.
// -----------------------------------------------------------------------------

import { existsSync, statSync } from 'node:fs';
import path from 'node:path';

export function webpFor(imagePath) {
  if (!imagePath) return null;

  // Swap the extension for .webp; bail if it wasn't a jpg/jpeg/png.
  const webpPath = imagePath.replace(/\.(jpe?g|png)$/i, '.webp');
  if (webpPath === imagePath) return null;

  const publicDir = path.join(process.cwd(), 'public');
  const webpAbs = path.join(publicDir, webpPath);
  const originalAbs = path.join(publicDir, imagePath);

  if (!existsSync(webpAbs) || !existsSync(originalAbs)) return null;

  // Only prefer WebP when it actually saves bytes.
  return statSync(webpAbs).size < statSync(originalAbs).size ? webpPath : null;
}
