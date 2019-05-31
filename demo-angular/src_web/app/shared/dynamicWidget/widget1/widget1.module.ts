import { NgModule,  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SeWebModule } from '@se/web-ui-angular';

import { Widget1Component } from './widget1.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SeWebModule
  ],
  declarations: [
    Widget1Component
  ],
  entryComponents: [
    Widget1Component
  ],
  exports: [
    Widget1Component
  ],
  schemas: [ ]
})
export class Widget1Module { }
