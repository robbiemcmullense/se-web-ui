import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DialogComponent,DialogModalComponent } from './dialog.component';
import { DialogConfig} from './dialog-config';
import { DialogModule} from './dialog.module';
import { ProxiesModule } from '../directives/proxies.module';

describe('DialogComponent', () => {
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;
  let modalcomponent : DialogModalComponent;
  let modalfixture : ComponentFixture<DialogModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DialogModule, ProxiesModule],
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

  it('should emit confirmdialog',()=>{
    spyOn(component.afterClosed, 'emit');
    // trigger the click
    fixture.componentInstance.type='confirm';
    fixture.detectChanges();
    const nativeElement = fixture.nativeElement;
    const button = nativeElement.querySelector('se-button');
    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();
    component.closeDialog();
    expect(component.afterClosed.emit).toHaveBeenCalled();
  });

  it('should emit backdropclick',()=>{
    spyOn(component.afterClosed, 'error');
    component.backdropClick();
    expect(component.afterClosed.error).toHaveBeenCalled();
  });

  it('should emit cancelclick',()=>{
    spyOn(component.afterClosed, 'error');
    component.cancelDialog();
    expect(component.afterClosed.error).toHaveBeenCalled();
  });

  //modal dialog test cases
  it('should create modal component', () => {
    expect(modalcomponent).toBeTruthy();
  });
  
  it('should load child component',()=>{
    modalcomponent.loadChildComponent(DialogModalComponent);
    expect(modalcomponent.loadChildComponent).toBeTruthy();
  });
});
