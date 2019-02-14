import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Http, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let filterSectionButton, modalAlertSpan: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, BrowserAnimationsModule],
      declarations: [HomeComponent],
      providers: [
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
            return new Http(backend, defaultOptions);
          },
          deps: [MockBackend, BaseRequestOptions]
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call startLoading function when filter section button is clicked', () => {
    spyOn(component, 'startLoading');
    filterSectionButton = fixture.debugElement.query(By.css('[fxFlex="30"] footer button'));
    filterSectionButton.triggerEventHandler('click', null);
    expect(component.startLoading).toHaveBeenCalled();
  });

  it('should call startLoadingTable function when filter section button is clicked', () => {
    spyOn(component, 'startLoadingTable');
    filterSectionButton = fixture.debugElement.query(By.css('[fxFlex="70"] footer button'));
    filterSectionButton.triggerEventHandler('click', null);
    expect(component.startLoadingTable).toHaveBeenCalled();
  });

  it('should call modalAlert function when clicking on the first span element', () => {
    spyOn(component, 'modalAlert');
    modalAlertSpan = fixture.debugElement.query(By.css('[fxFlex="30"] mat-tab-group button:first-child'));
    modalAlertSpan.triggerEventHandler('click', null);
    expect(component.modalAlert).toHaveBeenCalled();
  });

  it('should call modalConfirm function when clicking on the last span element', () => {
    spyOn(component, 'modalConfirm');
    modalAlertSpan = fixture.debugElement.query(By.css('[fxFlex="30"] mat-tab-group button:last-child'));
    modalAlertSpan.triggerEventHandler('click', null);
    expect(component.modalConfirm).toHaveBeenCalled();
  });
});
