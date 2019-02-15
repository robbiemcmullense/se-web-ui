import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { Widget1Component } from './widget1.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
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
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Widget1Module { }
