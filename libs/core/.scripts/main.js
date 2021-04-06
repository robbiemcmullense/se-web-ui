const copyPackages = require('./copy-package.js');
const cleanNg = require('./clean-ng-proxy.js');

cleanNg.fixUtilsEvent();
cleanNg.fixTypesLocation();
copyPackages.renamePackages();
