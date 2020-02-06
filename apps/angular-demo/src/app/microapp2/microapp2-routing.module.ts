import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Route } from '../core';

import { Microapp2Component } from './microapp2.component';

const routes: Routes = [
  { path: '', component: Microapp2Component, data: { title: 'Microapp2' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class Microapp2RoutingModule { }
