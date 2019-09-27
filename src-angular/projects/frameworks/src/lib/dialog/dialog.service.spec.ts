import { TestBed, ComponentFixture } from '@angular/core/testing';
import { DialogService } from './dialog.service';
import { DialogComponent, DialogModalComponent } from './dialog.component';
import { DialogConfig } from './dialog-config';
import { DialogModule } from './dialog.module';
import { ProxiesModule } from '../directives/proxies.module';

describe('DialogService', () => {
  let config: DialogConfig;
  let component: DialogComponent;
  let fixture: ComponentFixture<DialogComponent>;
  let modalcomponent: DialogModalComponent;
  let modalfixture: ComponentFixture<DialogModalComponent>;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [DialogModule, ProxiesModule],
      providers: [DialogConfig]
    })
  );
  beforeEach(() => {
    config = new DialogConfig();
  });
  it('Dialog service should be created', () => {
    const service: DialogService = TestBed.get(DialogService);
    expect(service).toBeTruthy();
  });
  it('should call create component', () => {
    const service: DialogService = TestBed.get(DialogService);
    const config = {
      title: 'Dialog title',
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      textOK: 'Ok'
    };
    const result = service.createDialogComponent(DialogComponent, config);
    expect(result.instance).toBeTruthy();
  });
  it('should call alert', () => {
    const service: DialogService = TestBed.get(DialogService);
    const config = {
      title: 'Dialog title',
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      textOK: 'Yes'
    };
    const result = service.alert(config);
    expect(result.instance.dialog.title).toBe('Dialog title');
    expect(result.instance.dialog.message).toBe(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    );
    expect(result.instance.dialog.textOK).toBe('Yes');
  });
  it('should call confirm', () => {
    const service: DialogService = TestBed.get(DialogService);
    const config = {
      title: 'Dialog title',
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
      textOK: 'Yes',
      textCancel: 'No'
    };
    const result = service.confirm(config);
    expect(result.instance.dialog.title).toBe('Dialog title');
    expect(result.instance.dialog.message).toBe(
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
    );
    expect(result.instance.dialog.textOK).toBe('Yes');
    expect(result.instance.dialog.textCancel).toBe('No');
  });
  it('should call modal', () => {
    const service: DialogService = TestBed.get(DialogService);
    const config = {
      size: 'small',
      color: 'alternative'
    };
    const result = service.modal(DialogModalComponent, config);
    expect(result.instance.modal.size).toBe('small');
  });
  it('should call modal without config', () => {
    const service: DialogService = TestBed.get(DialogService);
    const result = service.modal(DialogModalComponent);
    expect(result.instance).toBeTruthy();
  });
  it('should close dialog', () => {
    const service: DialogService = TestBed.get(DialogService);
    const config = {
      size: 'small',
      color: 'alternative'
    };
    service.alert(config);
    service.close(true, '');
    expect(service.componentRef.hostView.destroyed).toBeTruthy();
  });
  it('should cancel dialog', () => {
    const service: DialogService = TestBed.get(DialogService);
    const config = {
      size: 'small',
      color: 'alternative'
    };
    service.alert(config);
    service.cancel();
    expect(service.componentRef.hostView.destroyed).toBeTruthy();
  });
});
