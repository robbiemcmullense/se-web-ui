/*
 * Entry point of the application.
 * Only platform bootstrapping code should be here.
 * For app-specific initialization, use `app/app.component.ts`.
 */

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { applyPolyfills, defineCustomElements } from '@se/web-ui/loader';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err: any) => console.log(err));
  applyPolyfills().then(() => {
    defineCustomElements(window)
  })