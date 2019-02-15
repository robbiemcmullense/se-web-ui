import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { Widget4Component } from './widget4.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
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
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Widget4Module { }
