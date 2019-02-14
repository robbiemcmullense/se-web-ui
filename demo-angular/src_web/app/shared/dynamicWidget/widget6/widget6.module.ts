import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { Widget6Component } from './widget6.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  declarations: [
    Widget6Component
  ],
  entryComponents: [
    Widget6Component
  ],
  exports: [
    Widget6Component
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Widget6Module { }
