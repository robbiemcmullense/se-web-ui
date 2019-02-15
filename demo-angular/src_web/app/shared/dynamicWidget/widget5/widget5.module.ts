import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { Widget5Component } from './widget5.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  declarations: [
    Widget5Component
  ],
  entryComponents: [
    Widget5Component
  ],
  exports: [
    Widget5Component
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Widget5Module { }
