import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Route } from '../core';

import { DocsComponent } from './docs.component';

const routes: Routes = [
  { path: '', component: DocsComponent, data: { title: 'Docs' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class DocsRoutingModule { }
