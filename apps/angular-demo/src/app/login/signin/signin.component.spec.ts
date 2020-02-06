/* tslint:disable:no-unused-variable */
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationService } from '../../core';
import { SeWebModule } from '@se/web-ui-angular';
import { SigninComponent } from './signin.component';
import { HttpTestingController } from '@angular/common/http/testing';


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
        SeWebModule,
        TranslateModule.forRoot()
      ],
      declarations: [SigninComponent],
      providers: [
        AuthenticationService,
        {
          provide: Router,
          useClass: class { navigate = jasmine.createSpy('navigate'); }
        },
        HttpTestingController
      ]
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
