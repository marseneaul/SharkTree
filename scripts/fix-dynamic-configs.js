#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix a dynamic config file
function fixDynamicConfig(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Fix the return statement
    const fixedContent = content.replace(
        /return\s+children:/g,
        'return {\n        children:'
    );
    
    fs.writeFileSync(filePath, fixedContent);
    console.log(`Fixed: ${filePath}`);
}

// Function to fix all dynamic config files
function fixAllDynamicConfigs() {
    const configsDir = path.join(__dirname, '../src/data/configs');
    
    function processDirectory(dir) {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
            const fullPath = path.join(dir, item);
            const stat = fs.statSync(fullPath);
            
            if (stat.isDirectory()) {
                processDirectory(fullPath);
            } else if (item.includes('-dynamic.config.js')) {
                try {
                    fixDynamicConfig(fullPath);
                } catch (error) {
                    console.error(`Error fixing ${fullPath}:`, error.message);
                }
            }
        }
    }
    
    processDirectory(configsDir);
}

// Main execution
console.log('Fixing dynamic config files...');
fixAllDynamicConfigs();
console.log('All dynamic config files fixed!');
