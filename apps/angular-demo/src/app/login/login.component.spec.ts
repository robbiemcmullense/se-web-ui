/* tslint:disable:no-unused-variable */
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateService } from '@ngx-translate/core';
import { AuthenticationService } from '../core';
import { SeWebModule } from '@se/web-ui-angular';
import { LoginComponent } from './login.component';
import { EHOSTUNREACH } from 'constants';
import { I18nService } from '../core/i18n/i18n.service';
import { HttpTestingController } from '@angular/common/http/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
        SeWebModule
      ],
      declarations: [ LoginComponent ],
      providers: [
        I18nService,
        {
          provide: TranslateService,
          useClass: class {
            public setTranslation = jasmine.createSpy('setTranslation');
          }
        },
        HttpTestingController,
        {
        provide: AuthenticationService,
        useClass: class {
          public logout = jasmine.createSpy('logout');
          public isLoggedIn = jasmine.createSpy('isLoggedIn');
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
