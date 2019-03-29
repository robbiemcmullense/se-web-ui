import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SeWebModule } from '@se/web-ui-angular';
import { SharedModule } from '../shared/shared.module';
import { DocsRoutingModule } from './docs-routing.module';
import { DocsComponent } from './docs.component';

@NgModule({
  imports: [
    CommonModule,
    SeWebModule,
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
