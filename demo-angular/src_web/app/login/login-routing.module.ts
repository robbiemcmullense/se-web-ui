import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthenticationGuard } from '@core/authentication/authentication.guard';
import { AuthenticationService } from '@core/authentication/authentication.service';

import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    data: { title: 'Authentication' },
    children: [
      {
        path: 'login', component: SigninComponent
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
