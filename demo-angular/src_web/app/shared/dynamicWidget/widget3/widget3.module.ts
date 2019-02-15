import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { Widget3Component } from './widget3.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
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
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Widget3Module { }
