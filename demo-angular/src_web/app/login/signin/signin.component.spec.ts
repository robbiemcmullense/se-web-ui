/* tslint:disable:no-unused-variable */
import { DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MockBackend } from '@angular/http/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationService } from '@core/authentication/authentication.service';
import { SigninComponent } from './signin.component';


describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;
  let loginButton: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        BrowserAnimationsModule,
        TranslateModule.forRoot()
      ],
      declarations: [SigninComponent],
      providers: [
        AuthenticationService,
        {
          provide: Router,
          useClass: class { navigate = jasmine.createSpy('navigate'); }
        },
        MockBackend
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
