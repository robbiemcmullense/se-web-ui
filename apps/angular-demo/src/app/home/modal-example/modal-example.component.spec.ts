import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalTableComponent } from './modal-example.component';
import { SeWebModule, DialogService } from '@se/web-ui-angular';

describe('ModalTableComponent', () => {
  let component: ModalTableComponent;
  let fixture: ComponentFixture<ModalTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalTableComponent],
      imports: [SeWebModule],
      providers: [{ provide: DialogService }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
