import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '../shared/shared.module';
import { Microapp2RoutingModule } from './microapp2-routing.module';
import { Microapp2Component } from './microapp2.component';
import { SeWebModule } from '@se/web-ui-angular';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    SeWebModule,
    Microapp2RoutingModule
  ],
  declarations: [
    Microapp2Component
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Microapp2Module { }
