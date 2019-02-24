import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalExampleComponent } from './modal-example.component';
import { MatDialogRef } from '@angular/material/dialog';

describe('ModalExampleComponent', () => {
  let component: ModalExampleComponent;
  let fixture: ComponentFixture<ModalExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalExampleComponent],
      imports: [],
      providers: [{ provide: MatDialogRef }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});