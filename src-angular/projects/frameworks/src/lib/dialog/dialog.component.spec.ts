import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogComponent, DialogModalComponent } from './dialog.component';
import { DialogConfig } from './dialog-config';
import { DialogModule } from './dialog.module';
import { ProxiesModule } from '../directives/proxies.module';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;
  let modalComponent: DialogModalComponent;
  let modalFixture: ComponentFixture<DialogModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DialogModule, ProxiesModule],
      providers: [DialogConfig]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    modalFixture = TestBed.createComponent(DialogModalComponent);
    modalComponent = modalFixture.componentInstance;
    modalFixture.detectChanges();
  });

  it('should create dialog component', () => {
    expect(component).toBeTruthy();
  });

  it('should call the DialogService close method when the OK button is clicked', () => {
    spyOn(component.dialogService, 'close');
    // trigger the click
    fixture.componentInstance.type = 'confirm';
    fixture.detectChanges();
    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelector('se-button');
    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    component.closeDialog();
    expect(component.dialogService.close).toHaveBeenCalled();
  });

  it('should call the DialogService cancel method when the cancel button is clicked', () => {
    spyOn(component.dialogService, 'cancel');
    component.cancelDialog();
    expect(component.dialogService.cancel).toHaveBeenCalled();
  });

  it('should call the DialogService cancel method when the backdrop is clicked', () => {
    spyOn(component.dialogService, 'cancel');
    component.backdropClick();
    expect(component.dialogService.cancel).toHaveBeenCalled();
  });

  // Modal dialog test cases
  it('should create modal component', () => {
    expect(modalComponent).toBeTruthy();
  });

  it('should load child component', () => {
    modalComponent.loadChildComponent(DialogModalComponent);
    expect(modalComponent.loadChildComponent).toBeTruthy();
  });

  it('should call the DialogService cancel method when the backdrop is clicked', () => {
    spyOn(modalComponent.dialogService, 'cancel');
    modalComponent.backdropClick();
    expect(modalComponent.dialogService.cancel).toHaveBeenCalled();
  });
});
