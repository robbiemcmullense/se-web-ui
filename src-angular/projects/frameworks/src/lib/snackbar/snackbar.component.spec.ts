import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {SnackbarComponent} from './snackbar.component';
import {SnackbarConfig} from './snackbar-config';
import {SnackbarModule} from './snackbar.module';


describe('SnackbarComponent', () => {
  let component: SnackbarComponent;
  let fixture: ComponentFixture<SnackbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SnackbarModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers:[SnackbarConfig]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call closeEvent',()=>{
    spyOn(component.didClose, 'emit');
    component.closeEvent();
    expect(component.didClose.emit).toHaveBeenCalled(); 
  })
});
