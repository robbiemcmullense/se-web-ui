import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SeWebModule } from '@se/web-ui-angular';
import { ModalTableComponent } from './modal-table.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('ModalTableComponent', () => {
  let component: ModalTableComponent;
  let fixture: ComponentFixture<ModalTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SeWebModule],
      declarations: [ModalTableComponent],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
