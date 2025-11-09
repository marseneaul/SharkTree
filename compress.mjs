import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const inputDir = "./src/images";     // folder with your big shark images
const outputDir = "./output-images";   // compressed images go here

const MAX_WIDTH = 1600;   // adjust to what your site needs
const QUALITY = 80;       // 60–80 is good for webp

// Test mode: process only a limited number of files
const TEST_MODE = process.argv.includes("--test");
const TEST_LIMIT = 2;  // number of files to process in test mode
let processedCount = 0;

/**
 * Recursively process all image files in a directory
 */
async function processDirectory(dir, relativePath = "") {
  const fullPath = path.join(inputDir, relativePath);
  const entries = fs.readdirSync(fullPath, { withFileTypes: true });

  for (const entry of entries) {
    const entryPath = path.join(fullPath, entry.name);
    const relativeEntryPath = path.join(relativePath, entry.name);

    if (entry.isDirectory()) {
      // Recursively process subdirectories
      await processDirectory(dir, relativeEntryPath);
    } else if (entry.isFile()) {
      // Process image files
      if (!/\.(jpe?g|png|webp|tiff|avif)$/i.test(entry.name)) {
        continue; // skip non-images
      }

      // In test mode, stop after processing TEST_LIMIT files
      if (TEST_MODE && processedCount >= TEST_LIMIT) {
        return;
      }

      const outDir = path.join(outputDir, relativePath);
      if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir, { recursive: true });
      }

      const outName = path.parse(entry.name).name + ".webp";
      const outPath = path.join(outDir, outName);

      try {
        console.log(`Processing ${relativeEntryPath} -> ${path.join(relativePath, outName)}`);

        await sharp(entryPath)
          .resize({ width: MAX_WIDTH, withoutEnlargement: true })
          .toFormat("webp", {
            quality: QUALITY,
            effort: 5,       // slower = smaller
          })
          .toFile(outPath);

        // Get file sizes for comparison
        const inputStats = fs.statSync(entryPath);
        const outputStats = fs.statSync(outPath);
        const reduction = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);
        console.log(`  ✓ ${(inputStats.size / 1024).toFixed(1)}KB -> ${(outputStats.size / 1024).toFixed(1)}KB (${reduction}% reduction)`);
        
        processedCount++;
      } catch (error) {
        console.error(`  ✗ Error processing ${relativeEntryPath}:`, error.message);
      }
    }
  }
}

/**
 * Main function
 */
async function main() {
  if (!fs.existsSync(inputDir)) {
    console.error(`Error: Input directory "${inputDir}" does not exist`);
    process.exit(1);
  }

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log(`Starting compression...`);
  console.log(`Input: ${inputDir}`);
  console.log(`Output: ${outputDir}`);
  console.log(`Max width: ${MAX_WIDTH}px, Quality: ${QUALITY}`);
  if (TEST_MODE) {
    console.log(`TEST MODE: Processing only ${TEST_LIMIT} files\n`);
  } else {
    console.log();
  }

  await processDirectory(inputDir);

  console.log("\nDone!");
}

main().catch((error) => {
  console.error("Fatal error:", error);
  process.exit(1);
});

