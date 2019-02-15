import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ModalExampleComponent } from './modal-example/modal-example.component';
import { ModalTableComponent } from './modal-table/modal-table.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    ModalExampleComponent,
    ModalTableComponent
  ],
  entryComponents: [
    ModalExampleComponent,
    ModalTableComponent
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule {}
