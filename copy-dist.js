const fs = require('fs');
const path = require('path');

const distPath = path.join(__dirname, 'frontend', 'dist');
const targetPath = __dirname;

// Copy individual files
const files = fs.readdirSync(distPath);

files.forEach(file => {
  const src = path.join(distPath, file);
  const dest = path.join(targetPath, file);

  const stat = fs.lstatSync(src);

  if (stat.isDirectory()) {
    if (file === 'assets') {
      // Recursively copy assets folder
      const copyFolderRecursive = (srcDir, destDir) => {
        if (!fs.existsSync(destDir)) {
          fs.mkdirSync(destDir);
        }

        const items = fs.readdirSync(srcDir);

        items.forEach(item => {
          const srcItem = path.join(srcDir, item);
          const destItem = path.join(destDir, item);

          if (fs.lstatSync(srcItem).isDirectory()) {
            copyFolderRecursive(srcItem, destItem);
          } else {
            fs.copyFileSync(srcItem, destItem);
            console.log(`Copied ${srcItem} → ${destItem}`);
          }
        });
      };

      copyFolderRecursive(src, dest);
    }
  } else {
    fs.copyFileSync(src, dest);
    console.log(`Copied ${file} to root directory`);
  }
});
