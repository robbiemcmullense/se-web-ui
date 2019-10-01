import { SeWebModule, MODAL_DATA } from '@se/web-ui-angular';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ModalExampleComponent } from './modal-example.component';

describe('ModalExampleComponent', () => {
  let component: ModalExampleComponent;
  let fixture: ComponentFixture<ModalExampleComponent>;
  let mockData = {
    username: 'my user',
    password: '123456'
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SeWebModule, FormsModule],
      declarations: [ModalExampleComponent],
      providers: [{provide: MODAL_DATA, useValue: mockData}]
    })
    .compileComponents();
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
