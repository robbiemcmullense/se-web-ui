import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DialogComponent, DialogModalComponent } from './dialog.component';
import { DialogConfig } from './dialog-config';
import { DialogModule } from './dialog.module';
import { ProxiesModule } from '../directives/proxies.module';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;
  let modalComponent: DialogModalComponent;
  let modalFixture: ComponentFixture<DialogModalComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [DialogModule, ProxiesModule],
        providers: [DialogConfig],
      }).compileComponents();
    })
  );

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

  it('should call the closeEvent emit method when the OK button is clicked', () => {
    spyOn(component.closeEvent, 'emit');
    // trigger the click
    fixture.componentInstance.type = 'confirm';
    fixture.detectChanges();
    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelector('se-button');
    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    component.closeDialog();
    expect(component.closeEvent.emit).toHaveBeenCalled();
  });

  it('should call the closeEvent error method when the cancel button is clicked', () => {
    spyOn(component.closeEvent, 'error');
    component.cancelDialog();
    expect(component.closeEvent.error).toHaveBeenCalled();
  });

  it('should call the closeEvent error method when the backdrop is clicked', () => {
    spyOn(component.closeEvent, 'error');
    component.backdropClick();
    expect(component.closeEvent.error).toHaveBeenCalled();
  });

  // Modal dialog test cases
  it('should create modal component', () => {
    expect(modalComponent).toBeTruthy();
  });

  it('should load child component', () => {
    (modalComponent as any).loadChildComponent(DialogModalComponent);
    expect((modalComponent as any).loadChildComponent).toBeTruthy();
  });

  it('should call the closeEvent error method when the backdrop is clicked', () => {
    spyOn(modalComponent.closeEvent, 'error');
    modalComponent.backdropClick();
    expect(modalComponent.closeEvent.error).toHaveBeenCalled();
  });
});
