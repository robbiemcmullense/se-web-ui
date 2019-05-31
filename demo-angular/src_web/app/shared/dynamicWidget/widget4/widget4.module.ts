import { NgModule,   } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { Widget4Component } from './widget4.component';
import { SeWebModule } from '@se/web-ui-angular';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SeWebModule
  ],
  declarations: [
    Widget4Component
  ],
  entryComponents: [
    Widget4Component
  ],
  exports: [
    Widget4Component
  ],
  schemas: [ ]
})
export class Widget4Module { }
