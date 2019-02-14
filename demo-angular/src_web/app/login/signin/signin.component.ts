import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService, LoginContext } from '../../../../src_common/core/authentication/authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  public loginForm: FormGroup;
  public message: string;
  public version: string;
  public loading = false;

  constructor( public authenticationService: AuthenticationService, public router: Router, public fb: FormBuilder) { }

  public ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['test', Validators.required],
      password: ['123', Validators.required]
    });
  }

  public login(ev: any): void {
    this.loading = true;

    setTimeout(() => {
      this.authenticationService.login(this.loginForm.value || { username: 'user', password: 'pass'})
      .subscribe(() => {
        if (this.authenticationService.isAuthenticated()) {
          this.router.navigate(['/home'], {replaceUrl: true });
        }
      }, (e: any) => {
        this.message = e;
      });
    }, 1000);

  }
}
