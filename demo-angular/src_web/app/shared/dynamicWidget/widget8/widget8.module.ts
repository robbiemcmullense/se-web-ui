import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { Widget8Component } from './widget8.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  declarations: [
    Widget8Component
  ],
  entryComponents: [
    Widget8Component
  ],
  exports: [
    Widget8Component
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Widget8Module { }
