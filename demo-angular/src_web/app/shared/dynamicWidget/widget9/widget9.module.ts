import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { Widget9Component } from './widget9.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  declarations: [
    Widget9Component
  ],
  entryComponents: [
    Widget9Component
  ],
  exports: [
    Widget9Component
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Widget9Module { }
