import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Route } from './core';

const routes: Routes = [
  // Lazy loading

  // Fallback when no prior route is matched
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
  },
  Route.withShell([
    {
      path: 'home',
      loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    },
    {
      path: 'docs',
      loadChildren: () => import('./docs/docs.module').then(m => m.DocsModule),
    },
    {
      path: 'banner',
      loadChildren: () => import('./banner/banner.module').then(m => m.BannerModule),
    },
  ]),
  { path: '**', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
