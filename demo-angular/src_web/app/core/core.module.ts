import { NgModule, Optional, SkipSelf, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { ShellComponent } from './shell/shell.component';
import { HeaderComponent } from './shell/header/header.component';
import { CommonCoreModule } from '@core/core.module';
import { SeWebModule } from '@se/web-ui/angular';

@NgModule({
  imports: [
    CommonModule,
    SeWebModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule,
    RouterModule,
    CommonCoreModule
  ],
  declarations: [
    HeaderComponent,
    ShellComponent,
  ],
  entryComponents: [
  ],
  providers: [],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    // Import guard
    if (parentModule) {
      throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
    }
  }

}
