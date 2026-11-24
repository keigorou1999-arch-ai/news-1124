// World news of Tuesday 24 November 2026 in one image.
//
// The picture is drawn by hand as HTML and SVG in source/page.html and rendered once to entry.png
// (see README.md). The grader runs this file with no network, so all it does is check that the
// rendered image is inside the contest limits and write the same bytes to the output directory.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const MAX_BYTES = 1024 * 1024; // 1 MiB
const MAX_SIDE = 1024; // pixels, each side
const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, 'entry.png');
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const image = readFileSync(source);

if (!image.subarray(0, 8).equals(PNG_SIGNATURE)) {
  throw new Error('entry.png is not a PNG file');
}
if (image.length > MAX_BYTES) {
  throw new Error(`entry.png is ${image.length} bytes, over the ${MAX_BYTES} byte limit`);
}

// The IHDR chunk comes first in every PNG: width at byte 16, height at byte 20, big-endian.
const width = image.readUInt32BE(16);
const height = image.readUInt32BE(20);
if (width > MAX_SIDE || height > MAX_SIDE) {
  throw new Error(`entry.png is ${width}x${height}, over the ${MAX_SIDE}x${MAX_SIDE} limit`);
}

// A whole PNG ends with an empty IEND chunk: length 0, the name, then its fixed checksum.
const PNG_END = Buffer.from([0, 0, 0, 0, 0x49, 0x45, 0x4e, 0x44, 0xae, 0x42, 0x60, 0x82]);
if (!image.subarray(image.length - PNG_END.length).equals(PNG_END)) {
  throw new Error('entry.png is cut short: it does not end with an IEND chunk');
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.png'), image);
console.log(`wrote entry.png (${width}x${height}, ${image.length} bytes) to ${outputDir}`);
