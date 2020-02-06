import { NgModule } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { MockAuthenticationService } from './authentication.service.mock';
import { AuthenticationGuard } from './authentication.guard';

@NgModule({
    imports: [],
    providers: [
      AuthenticationService,
      AuthenticationGuard,
      MockAuthenticationService
    ]
  })
  export class AuthenticationModule {
  
  }