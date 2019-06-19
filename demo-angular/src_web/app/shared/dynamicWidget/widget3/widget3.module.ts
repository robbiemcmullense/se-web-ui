import { NgModule,   } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { Widget3Component } from './widget3.component';
import { SeWebModule } from '@se/web-ui-angular';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SeWebModule
  ],
  declarations: [
    Widget3Component
  ],
  entryComponents: [
    Widget3Component
  ],
  exports: [
    Widget3Component
  ],
  schemas: [ ]
})
export class Widget3Module { }
