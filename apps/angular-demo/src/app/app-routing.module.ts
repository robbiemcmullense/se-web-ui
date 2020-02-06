import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
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
      path: 'microapp1',
      loadChildren: './microapp1/microapp1.module#Microapp1Module'
    },
    {
      path: 'microapp2',
      loadChildren: './microapp2/microapp2.module#Microapp2Module'
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
