import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { environment } from '@env/environment';
import { Logger } from '@core/logger.service';
import { I18nService } from '@core/i18n.service';
import { AuthenticationService } from '@core/authentication/authentication.service';

const log = new Logger('Login');

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public appInfo: any;

  public error: string;
  public isLoading = false;
  public loginForm: FormGroup;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private i18nService: I18nService,
              private authenticationService: AuthenticationService) {}

  ngOnInit() {
    this.appInfo = {
      link: 'https://www.schneider-electric.com',
      logo: environment.logo,
      version: environment.version,
      title: environment.title,
      productDomain: environment.productDomain,
      image: `url(${environment.image})`,
      copyright: environment.copyright
    };
   }

  setLanguage(language: string) {
    this.i18nService.language = language;
  }

  get currentLanguage(): string | null {
    return this.i18nService.language;
  }

  get languages(): string[]  {
    return this.i18nService.supportedLanguages;
  }

}
