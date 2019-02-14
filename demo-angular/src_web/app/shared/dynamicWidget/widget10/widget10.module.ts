import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { Widget10Component } from './widget10.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
  ],
  declarations: [
    Widget10Component
  ],
  entryComponents: [
    Widget10Component
  ],
  exports: [
    Widget10Component
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Widget10Module { }
