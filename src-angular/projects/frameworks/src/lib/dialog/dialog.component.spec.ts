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

  it('should call the afterClosed emit method when the OK button is clicked', () => {
    spyOn(component.afterClosed, 'emit');
    // trigger the click
    fixture.componentInstance.type = 'confirm';
    fixture.detectChanges();
    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelector('se-button');
    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    component.closeDialog();
    expect(component.afterClosed.emit).toHaveBeenCalled();
  });

  it('should call the afterClosed error method when the cancel button is clicked', () => {
    spyOn(component.afterClosed, 'error');
    component.cancelDialog();
    expect(component.afterClosed.error).toHaveBeenCalled();
  });

  it('should call the afterClosed error method when the backdrop is clicked', () => {
    spyOn(component.afterClosed, 'error');
    component.backdropClick();
    expect(component.afterClosed.error).toHaveBeenCalled();
  });

  // Modal dialog test cases
  it('should create modal component', () => {
    expect(modalComponent).toBeTruthy();
  });

  it('should load child component', () => {
    modalComponent.loadChildComponent(DialogModalComponent);
    expect(modalComponent.loadChildComponent).toBeTruthy();
  });

  it('should call the afterClosed error method when the backdrop is clicked', () => {
    spyOn(modalComponent.afterClosed, 'error');
    modalComponent.backdropClick();
    expect(modalComponent.afterClosed.error).toHaveBeenCalled();
  });
});
