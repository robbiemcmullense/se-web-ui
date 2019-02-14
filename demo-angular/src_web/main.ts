/*
 * Entry point of the application.
 * Only platform bootstrapping code should be here.
 * For app-specific initialization, use `app/app.component.ts`.
 */

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { defineCustomElements as defineSeComponent } from '@se/ui-web-components/loader'; // "@se/ui-web-components/core/loader"

import { AppModule } from './app/app.module';
import { environment } from '@env/environment';


defineSeComponent(window);

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err: any) => console.log(err));
