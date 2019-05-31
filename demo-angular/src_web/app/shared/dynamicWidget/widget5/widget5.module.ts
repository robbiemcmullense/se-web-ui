import { NgModule,   } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { Widget5Component } from './widget5.component';
import { SeWebModule } from '@se/web-ui-angular';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SeWebModule
  ],
  declarations: [
    Widget5Component
  ],
  entryComponents: [
    Widget5Component
  ],
  exports: [
    Widget5Component
  ],
  schemas: [ ]
})
export class Widget5Module { }
