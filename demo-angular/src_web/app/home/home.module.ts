import { NgModule,    } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ModalExampleComponent } from './modal-example/modal-example.component';
import { ModalTableComponent } from './modal-table/modal-table.component';
import { SeWebModule } from '@se/web-ui-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SeWebModule,
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
  providers: []
})
export class HomeModule {}
