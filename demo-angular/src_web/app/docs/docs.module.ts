import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '../shared/shared.module';
import { DocsRoutingModule } from './docs-routing.module';
import { DocsComponent } from './docs.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    DocsRoutingModule
  ],
  declarations: [
    DocsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DocsModule { }
