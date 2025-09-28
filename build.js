// Build script for Vercel deployment
const fs = require('fs');
const path = require('path');

console.log('🚀 Building Tarun Portfolio for Vercel...');

// Create public directory if it doesn't exist
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
}

// Copy static files to public directory
const filesToCopy = [
    'index.html',
    'styles.css',
    'script.js',
    'chatbot.js'
];

filesToCopy.forEach(file => {
    const srcPath = path.join(__dirname, file);
    const destPath = path.join(publicDir, file);
    
    if (fs.existsSync(srcPath)) {
        fs.copyFileSync(srcPath, destPath);
        console.log(`✅ Copied ${file} to public directory`);
    } else {
        console.log(`⚠️  File ${file} not found`);
    }
});

// Create a simple index.html redirect for Vercel
const indexContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tarun Portfolio - Redirecting...</title>
    <meta http-equiv="refresh" content="0; url=./index.html">
</head>
<body>
    <p>Redirecting to Tarun's Portfolio...</p>
</body>
</html>`;

fs.writeFileSync(path.join(publicDir, 'index.html'), indexContent);

console.log('✅ Build completed successfully!');
console.log('📁 Files ready for Vercel deployment in public/ directory');
