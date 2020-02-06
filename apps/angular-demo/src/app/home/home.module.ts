import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SeWebModule } from '@se/web-ui-angular';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SeWebModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
  ],
  entryComponents: [
  ],
  providers: []
})
export class HomeModule {}
