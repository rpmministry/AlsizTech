const fs = require('fs');
const path = require('path');

const srcDir = __dirname;
const destDir = path.resolve('C:/Users/Alsiz/Documents/ALSIZTECH');

// 1. Regenerar dark.html a partir de index.html
const indexHtmlPath = path.join(srcDir, 'index.html');
const darkHtmlPath = path.join(srcDir, 'dark.html');

let indexContent = fs.readFileSync(indexHtmlPath, 'utf-8');
let darkContent = indexContent.replace('<html lang="es">', '<html lang="es" data-theme="dark">');

fs.writeFileSync(darkHtmlPath, darkContent, 'utf-8');
console.log('Successfully regenerated dark.html with data-theme="dark" and UTF-8 encoding.');

// 2. Archivos principales a sincronizar
const filesToSync = ['index.html', 'dark.html', 'styles.css', 'script.js'];

filesToSync.forEach(file => {
  const srcFile = path.join(srcDir, file);
  const destFile = path.join(destDir, file);
  fs.copyFileSync(srcFile, destFile);
  console.log(`Synced ${file} -> ${destFile}`);
});

// 3. Sincronizar todos los assets (incluyendo logos principales y logos-3d)
const srcAssetsDir = path.join(srcDir, 'assets');
const destAssetsDir = path.join(destDir, 'assets');

if (!fs.existsSync(destAssetsDir)) {
  fs.mkdirSync(destAssetsDir, { recursive: true });
}

fs.readdirSync(srcAssetsDir).forEach(item => {
  const srcItem = path.join(srcAssetsDir, item);
  const destItem = path.join(destAssetsDir, item);
  if (fs.statSync(srcItem).isDirectory()) {
    if (!fs.existsSync(destItem)) {
      fs.mkdirSync(destItem, { recursive: true });
    }
    fs.readdirSync(srcItem).forEach(subFile => {
      fs.copyFileSync(path.join(srcItem, subFile), path.join(destItem, subFile));
      console.log(`Synced Sub-Asset: ${item}/${subFile}`);
    });
  } else {
    fs.copyFileSync(srcItem, destItem);
    console.log(`Synced Asset: ${item}`);
  }
});

// También sincronizar a C:/Users/Alsiz/Documents/ALSIZTECH/AlsizTech_Logos_SVG si existe
const destLogosSvgDir = path.join(destDir, 'AlsizTech_Logos_SVG');
if (fs.existsSync(destLogosSvgDir)) {
  ['alsiztech_logo_claro.svg', 'alsiztech_logo_oscuro.svg', 'alsiztech_logo_monocromo.svg'].forEach(logo => {
    const srcLogo = path.join(srcAssetsDir, logo);
    if (fs.existsSync(srcLogo)) {
      fs.copyFileSync(srcLogo, path.join(destLogosSvgDir, logo));
      console.log(`Synced to AlsizTech_Logos_SVG: ${logo}`);
    }
  });
}

console.log('All files and 3D assets synchronized successfully to ALSIZTECH documents directory.');

