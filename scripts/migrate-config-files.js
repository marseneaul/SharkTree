#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to convert a config file to dynamic loading
function convertConfigFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Extract all import statements
    const lines = content.split('\n');
    const importLines = lines.filter(line => 
        line.includes('import') && line.includes('from') && line.includes('species/')
    );
    
    if (importLines.length === 0) {
        console.log(`No species imports found in ${filePath}`);
        return;
    }
    
    // Extract species paths and variable names
    const speciesData = importLines.map(line => {
        const importMatch = line.match(/import\s*{\s*(\w+)\s*}\s*from\s*["']\.\.\/\.\.\/species\/([^"']+)["']/);
        if (importMatch) {
            return {
                variableName: importMatch[1],
                speciesPath: importMatch[2]
            };
        }
        return null;
    }).filter(Boolean);
    
    // Generate dynamic loading code
    const dynamicImports = speciesData.map((species, index) => 
        `        const ${species.variableName} = await speciesDataLoader.loadSpeciesData('${species.speciesPath}');`
    ).join('\n');
    
    // Extract the config structure (everything after the imports)
    const configStartIndex = lines.findIndex(line => line.includes('export const') && line.includes('Config'));
    if (configStartIndex === -1) {
        console.log(`Could not find config export in ${filePath}`);
        return;
    }
    
    const configName = lines[configStartIndex].match(/export const (\w+Config)/)[1];
    const configStructure = lines.slice(configStartIndex + 1).join('\n');
    
    // Create new dynamic config
    const newContent = `import { speciesDataLoader } from "../../../utils/data-loader";

export const ${configName} = async () => {
    // Load all species data dynamically
${dynamicImports}
    
    return ${configStructure};`;
    
    // Write the new file
    const newFilePath = filePath.replace('.config.js', '-dynamic.config.js');
    fs.writeFileSync(newFilePath, newContent);
    console.log(`Created dynamic config: ${newFilePath}`);
    
    return {
        originalFile: filePath,
        newFile: newFilePath,
        speciesCount: speciesData.length
    };
}

// Function to migrate all config files
function migrateAllConfigs() {
    const configsDir = path.join(__dirname, '../src/data/configs');
    const results = [];
    
    function processDirectory(dir) {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
            const fullPath = path.join(dir, item);
            const stat = fs.statSync(fullPath);
            
            if (stat.isDirectory()) {
                processDirectory(fullPath);
            } else if (item.endsWith('.config.js') && !item.includes('-dynamic')) {
                try {
                    const result = convertConfigFile(fullPath);
                    if (result) {
                        results.push(result);
                    }
                } catch (error) {
                    console.error(`Error processing ${fullPath}:`, error.message);
                }
            }
        }
    }
    
    processDirectory(configsDir);
    return results;
}

// Function to update manifest with new dynamic configs
function updateManifest(results) {
    const manifestPath = path.join(__dirname, '../src/data/configs/manifest.js');
    const manifestContent = fs.readFileSync(manifestPath, 'utf8');
    
    // Extract current manifest
    const manifestMatch = manifestContent.match(/export const CONFIG_MANIFEST = ({[\s\S]*?});/);
    if (!manifestMatch) {
        console.log('Could not parse manifest');
        return;
    }
    
    const manifest = JSON.parse(manifestMatch[1]);
    
    // Update manifest to point to dynamic configs
    for (const result of results) {
        const configKey = path.basename(result.originalFile, '.config.js');
        const speciesType = path.dirname(result.originalFile).split('/').pop();
        const newFileName = path.basename(result.newFile);
        
        if (manifest[speciesType] && manifest[speciesType][configKey]) {
            manifest[speciesType][configKey] = newFileName;
            console.log(`Updated manifest: ${speciesType}/${configKey} -> ${newFileName}`);
        }
    }
    
    // Write updated manifest
    const newManifestContent = `export const CONFIG_MANIFEST = ${JSON.stringify(manifest, null, 2)};`;
    fs.writeFileSync(manifestPath, newManifestContent);
    console.log('Updated manifest with dynamic configs');
}

// Main execution
console.log('Starting config file migration...');
const results = migrateAllConfigs();

console.log(`\nMigration Summary:`);
console.log(`- Processed ${results.length} config files`);
console.log(`- Total species imports: ${results.reduce((sum, r) => sum + r.speciesCount, 0)}`);

// Update manifest
updateManifest(results);

console.log('\nMigration complete!');
console.log('Next steps:');
console.log('1. Test the build: npm run build');
console.log('2. Test the application to ensure all species load correctly');
console.log('3. Remove old static config files once verified');
