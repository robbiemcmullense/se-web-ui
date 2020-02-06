import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Route } from '../core';

import { Microapp1Component } from './microapp1.component';

const routes: Routes = [
  { path: '', component: Microapp1Component, data: { title: 'Microapp1' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class Microapp1RoutingModule { }
