import { NgModule  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { SeWebModule } from '@se/web-ui-angular';
import { SharedModule } from '../shared/shared.module';
import { DocsRoutingModule } from './docs-routing.module';
import { DocsComponent } from './docs.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SeWebModule,
    TranslateModule,
    SharedModule,
    DocsRoutingModule
  ],
  declarations: [
    DocsComponent
  ]
})
export class DocsModule { }
