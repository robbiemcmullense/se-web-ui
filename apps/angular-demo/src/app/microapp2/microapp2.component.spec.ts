import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClient } from '@angular/common/http';
import { SeWebModule } from '@se/web-ui-angular';
import { SharedModule } from '../shared/shared.module';
import { Microapp2Component } from './microapp2.component';
import { HttpTestingController } from '@angular/common/http/testing';

describe('Microapp2Component', () => {
  let component: Microapp2Component;
  let fixture: ComponentFixture<Microapp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
          SharedModule,
          BrowserAnimationsModule,
          SeWebModule
        ],
        declarations: [Microapp2Component],
        providers: [
          HttpTestingController
        ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Microapp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
