import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthenticationGuard, AuthenticationService} from '../core';

import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login.component';

const routes: Routes = [
  { path: '', redirectTo: 'signin' },
  {
    path: '',
    component: LoginComponent,
    data: { title: 'Authentication' },
    children: [
      {
        path: 'signin', component: SigninComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    AuthenticationGuard,
    AuthenticationService
  ]
})
export class LoginRoutingModule { }
