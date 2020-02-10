import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BannerComponent } from './banner.component';

const routes: Routes = [
  { path: '', component: BannerComponent, data: { title: 'Banner' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class BannerRoutingModule { }
