const fs = require('fs');
const path = require('path');

/**
 * Generate complete species manifest for all 497 species files
 */
function generateSpeciesManifest() {
    const speciesDir = path.join(__dirname, '../src/data/species');
    const manifest = {};
    
    console.log(`🔍 Searching for species files in: ${speciesDir}`);
    
    // Use a more robust approach with synchronous directory traversal
    function findSpeciesFiles(dir, relativePath = '') {
        try {
            const items = fs.readdirSync(dir);
            
            for (const item of items) {
                // Skip hidden files and manifest
                if (item.startsWith('.') || item.includes('manifest')) {
                    continue;
                }
                
                const fullPath = path.join(dir, item);
                const stat = fs.statSync(fullPath);
                
                if (stat.isDirectory()) {
                    // Recursively search subdirectories
                    const newRelativePath = relativePath ? path.join(relativePath, item) : item;
                    findSpeciesFiles(fullPath, newRelativePath);
                } else if (item.endsWith('.js')) {
                    // Found a species file
                    const speciesKey = relativePath.replace(/\\/g, '/');
                    const fileName = item;
                    manifest[speciesKey] = `${speciesKey}/${fileName}`;
                    console.log(`  📄 Found: ${speciesKey}/${fileName}`);
                }
            }
        } catch (error) {
            console.error(`❌ Error reading directory ${dir}:`, error.message);
        }
    }
    
    // Find all species files
    findSpeciesFiles(speciesDir);
    
    console.log(`📁 Found ${Object.keys(manifest).length} species files`);
    
    // Generate the manifest content
    const manifestContent = `// Auto-generated species manifest
// This file maps all individual species files for dynamic loading
// Generated on ${new Date().toISOString()}

export const SPECIES_MANIFEST = {
${Object.entries(manifest)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([key, value]) => `  "${key}": "${value}"`)
    .join(',\n')}
};

// Helper function to get species file path
export function getSpeciesFilePath(speciesKey) {
  return SPECIES_MANIFEST[speciesKey];
}

// Helper function to get all species keys
export function getAllSpeciesKeys() {
  return Object.keys(SPECIES_MANIFEST);
}

// Helper function to get species count
export function getSpeciesCount() {
  return Object.keys(SPECIES_MANIFEST).length;
}

// Helper function to get species by type
export function getSpeciesByType(type) {
  return Object.keys(SPECIES_MANIFEST).filter(key => key.startsWith(type));
}

// Helper function to get species by family
export function getSpeciesByFamily(family) {
  return Object.keys(SPECIES_MANIFEST).filter(key => key.includes(family));
}`;

    // Write the manifest file
    const manifestPath = path.join(__dirname, '../src/data/species/manifest.js');
    fs.writeFileSync(manifestPath, manifestContent);
    
    console.log(`✅ Generated species manifest with ${Object.keys(manifest).length} species`);
    console.log(`📁 Manifest saved to: ${manifestPath}`);
    
    // Show some statistics
    const sharks = Object.keys(manifest).filter(key => key.startsWith('sharks')).length;
    const rays = Object.keys(manifest).filter(key => key.startsWith('rays')).length;
    const chimaeras = Object.keys(manifest).filter(key => key.startsWith('chimaeras')).length;
    
    console.log(`📊 Species breakdown:`);
    console.log(`   🦈 Sharks: ${sharks}`);
    console.log(`   🐠 Rays: ${rays}`);
    console.log(`   🦑 Chimaeras: ${chimaeras}`);
    console.log(`   📈 Total: ${Object.keys(manifest).length}`);
    
    return manifest;
}

// Run the script
if (require.main === module) {
    generateSpeciesManifest();
}

module.exports = { generateSpeciesManifest };
