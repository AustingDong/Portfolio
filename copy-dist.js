const fs = require('fs');
const path = require('path');

const distPath = path.join(__dirname, 'frontend', 'dist');
const targetPath = __dirname;

// List all files in the dist directory
const files = fs.readdirSync(distPath);

// Copy files to the root directory
files.forEach(file => {
  const src = path.join(distPath, file);
  const dest = path.join(targetPath, file);

  if (fs.lstatSync(src).isDirectory()) {
    // Ignore directories, e.g. assets will have problems
    return;
  }

  fs.copyFileSync(src, dest);
  console.log(`Copied ${file} to root directory`);
});
