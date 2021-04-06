const fs = require('fs');

const path = require('path');

const libsFolderOut = path.join(__dirname, '..', '..', '..', 'dist', 'libs');
const libsFolderIn = path.join(__dirname, '..', '..', '..', 'libs');

const renamePackages = () => {
  ['core'].forEach(lib => {
    const fileIn = path.join(libsFolderIn, lib, '_package.json');
    const fileOut = path.join(libsFolderOut, lib, 'package.json');
    fs.copyFile(fileIn, fileOut, () => {});
  });
};

module.exports = {
  renamePackages,
};
