const fs = require("fs");
const path = require("path");

// Chemin vers le dossier contenant les fichiers SVG
const svgDir = "./frontend/src/assets/icons";

// Chemin vers le dossier où les fichiers React seront générés
const outputDir = "./frontend/src/components/icons";

// Lire les fichiers SVG du dossier
fs.readdir(svgDir, (err, files) => {
  if (err) {
    return console.error("Unable to read SVG directory", err);
  }

  // Filtrer les fichiers pour ne garder que les SVG
  const svgFiles = files.filter(
    (file) => path.extname(file).toLowerCase() === ".svg"
  );

  svgFiles.forEach((svgFile) => {
    const componentName =
      path.basename(svgFile, ".svg").replace(/-./g, (x) => x[1].toUpperCase()) +
      "Icon";
    const importPath = path.relative(outputDir, path.join(svgDir, svgFile));

    const componentContent = `import React from 'react';
import ${componentName.toLowerCase()} from '${importPath}';

const ${componentName} = (props) => (
  <img src={${componentName.toLowerCase()}} alt="${componentName}" {...props} />
);

export default ${componentName};
`;

    const outputPath = path.join(outputDir, `${componentName}.js`);
    fs.writeFile(outputPath, componentContent, (err) => {
      if (err) {
        return console.error("Unable to write component file", err);
      }
      console.log(`Component ${componentName} created at ${outputPath}`);
    });
  });
});
