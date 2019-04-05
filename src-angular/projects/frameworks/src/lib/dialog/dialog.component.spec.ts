import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DialogComponent,DialogModalComponent } from './dialog.component';
import { DialogConfig} from './dialog-config';
import { DialogModule} from './dialog.module';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;
  let modalcomponent : DialogModalComponent;
  let modalfixture : ComponentFixture<DialogModalComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DialogModule],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
      providers:[DialogConfig]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    modalfixture = TestBed.createComponent(DialogModalComponent);
    modalcomponent = modalfixture.componentInstance;
    modalfixture.detectChanges();
  });

  it('should create dialog component', () => {
    expect(component).toBeTruthy();
  });
  it('should emit closedialog',()=>{
    spyOn(component.didClose, 'emit');
    // trigger the click
    fixture.componentInstance.type='confirm';
    fixture.detectChanges();
    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelector('se-button');
    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    expect(component.didClose.emit).toHaveBeenCalled(); 
  });

  it('should emit confirmdialog',()=>{
    spyOn(component.didConfirm, 'emit');
    component.confirmDialog();
    expect(component.didConfirm.emit).toHaveBeenCalled();
  });
  it('should emit backdropclick',()=>{
    spyOn(component.backdrop, 'emit');
    component.backdropClick();
    expect(component.backdrop.emit).toHaveBeenCalled();
  });

//modal dialog test cases
it('should create modal component', () => {
  expect(modalcomponent).toBeTruthy();
});
it('should emit close modal dialog',()=>{
  spyOn(modalcomponent.didClose , 'emit');
  modalcomponent.closeDialog();
  expect(modalcomponent.didClose.emit).toHaveBeenCalled();
});
it('should emit close backdropclick',()=>{
  spyOn(modalcomponent.backdrop , 'emit');
  modalcomponent.backdropClick();
  expect(modalcomponent.backdrop.emit).toHaveBeenCalled();
});
it('should load child component',()=>{
  modalcomponent.loadChildComponent(DialogModalComponent);
  expect(modalcomponent.loadChildComponent).toBeTruthy();
});

});
