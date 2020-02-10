import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Route } from './core';

const routes: Routes = [
  // Lazy loading

  // Fallback when no prior route is matched
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  },
  Route.withShell([
    {
      path: 'home',
      loadChildren: './home/home.module#HomeModule'
    },
    {
      path: 'docs',
      loadChildren: './docs/docs.module#DocsModule'
    },
    {
      path: 'banner',
      loadChildren: './banner/banner.module#BannerModule'
    }
  ]),
  { path: '**', redirectTo: 'login', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
