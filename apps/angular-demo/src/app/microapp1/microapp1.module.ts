import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { Microapp1RoutingModule } from './microapp1-routing.module';
import { Microapp1Component } from './microapp1.component';
import { SeWebModule } from '@se/web-ui-angular';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SeWebModule,
    Microapp1RoutingModule
  ],
  declarations: [
    Microapp1Component
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Microapp1Module { }
