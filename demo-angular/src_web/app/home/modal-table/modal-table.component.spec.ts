import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalTableComponent } from './modal-table.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('ModalTableComponent', () => {
  let component: ModalTableComponent;
  let fixture: ComponentFixture<ModalTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [ModalTableComponent],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
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
