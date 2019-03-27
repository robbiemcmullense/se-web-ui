import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '../material.module';
import { SeWebModule } from '@se/web-ui/angular';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    SeWebModule,
    DashboardRoutingModule,
    FlexLayoutModule,
    MaterialModule
  ],
  declarations: [
    DashboardComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardModule { }
