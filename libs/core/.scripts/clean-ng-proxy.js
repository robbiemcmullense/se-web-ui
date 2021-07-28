const fs = require('fs');

const path = require('path');

const buildRoute = path.join(
  __dirname,
  '..',
  '..',
  'angular/src/lib'
);

// Avoid event being emited twice
// this should not be needed and would go away once:
// - https://github.com/ionic-team/stencil-ds-output-targets/pull/82

const fixUtilsEvent = () => {
  const filePath = path.join(buildRoute, 'directives/angular-component-lib/utils.ts')
  let content = fs.readFileSync(filePath, 'utf8');
  
  content = content.replace(
    "import { fromEvent } from 'rxjs'",
    `/* eslint-disable */
    import { EventEmitter } from '@angular/core'`
  );
  content = content.replace('fromEvent(el, eventName)', 'new EventEmitter()');

  fs.writeFileSync(filePath, content);
};

const fixTypesLocation = () => {
  const filePath = path.join(buildRoute, 'directives/proxies.ts')

  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(new RegExp('dist/libs/core/', 'g'), '@se/web-ui/');
  fs.writeFileSync(filePath, content);
};

module.exports = {
  fixUtilsEvent,
  fixTypesLocation,
};
