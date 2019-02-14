import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { Widget7Component } from './widget7.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  declarations: [
    Widget7Component
  ],
  entryComponents: [
    Widget7Component
  ],
  exports: [
    Widget7Component
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Widget7Module { }
