import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalExampleComponent } from './modal-example.component';
import {   } from '@angular/core';

describe('ModalExampleComponent', () => {
  let component: ModalExampleComponent;
  let fixture: ComponentFixture<ModalExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalExampleComponent ],
      schemas: [

      ],
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
