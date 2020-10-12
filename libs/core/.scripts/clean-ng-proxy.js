const fs = require('fs');

const path = require('path');

const utilsFile = path.join(
  __dirname,
  '..',
  '..',
  'angular/src/lib/directives/angular-component-lib/utils.ts'
);
const proxiesFile = path.join(
  __dirname,
  '..',
  '..',
  'angular/src/lib/directives/proxies.ts'
);

function fixUtilsEvent() {
  let content = fs.readFileSync(utilsFile, 'utf8');
  // this should not be needed and would go away once:
  // - https://github.com/ionic-team/stencil-ds-output-targets/pull/82
  content = content.replace(
    "import { fromEvent } from 'rxjs'",
    "import { EventEmitter } from '@angular/core';"
  );
  content = content.replace('fromEvent(el, eventName)', 'new EventEmitter()');

  fs.writeFileSync(utilsFile, content);
}

function fixTypesLocation() {
  let content = fs.readFileSync(proxiesFile, 'utf8');
  content = content.replace(new RegExp('dist/libs/core/', 'g'), '@se/web-ui/');
  fs.writeFileSync(proxiesFile, content);
}

fixUtilsEvent();
fixTypesLocation();
