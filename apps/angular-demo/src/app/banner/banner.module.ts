import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '../shared/shared.module';
import { BannerRoutingModule } from './banner-routing.module';
import { BannerComponent } from './banner.component';
import { SeWebModule } from '@se/web-ui-angular';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    SeWebModule,
    BannerRoutingModule
  ],
  declarations: [
    BannerComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BannerModule { }
