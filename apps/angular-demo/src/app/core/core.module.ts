import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SeWebModule } from '@se/web-ui-angular';

import { ShellComponent } from './shell/shell.component';
import { HeaderComponent } from './shell/header/header.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { I18nService } from './i18n/i18n.service';

import { ModalAboutComponent } from './shell/header/modal-about/modal-about.component';
import { HelpMenuComponent } from './shell/header/help-menu/help-menu.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule,
    RouterModule,
    AuthenticationModule,
    SeWebModule
  ],
  declarations: [
    HeaderComponent,
    ShellComponent,
    ModalAboutComponent,
    HelpMenuComponent
  ],
  entryComponents: [
    ModalAboutComponent
  ],
  providers: [
    I18nService
  ],
  exports: [],
  schemas: []
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    // Import guard
    if (parentModule) {
      throw new Error(`${parentModule} has already been loaded. Import Core module in the AppModule only.`);
    }
  }

}
