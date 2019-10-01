import { TestBed, ComponentFixture } from '@angular/core/testing';
import { DialogService } from './dialog.service';
import { DialogComponent, DialogModalComponent } from './dialog.component';
import { DialogConfig } from './dialog-config';
import { DialogModule } from './dialog.module';
import { ProxiesModule } from '../directives/proxies.module';

describe('DialogService', () => {
  let config: DialogConfig;

  beforeEach(() => {
    config = new DialogConfig();
    TestBed.configureTestingModule({
      imports: [DialogModule, ProxiesModule],
      providers: [DialogConfig]
    });
  });

  it('should create the DialogService', () => {
    const service: DialogService = TestBed.get(DialogService);
    expect(service).toBeTruthy();
  });

  it('should call createDialogComponent', () => {
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

  it('should call the service alert method', () => {
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

  it('should call the service confirm method', () => {
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

  it('should call the service modal method', () => {
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

  it('should close the dialog throug the close method', () => {
    const service: DialogService = TestBed.get(DialogService);
    const config = {
      size: 'small',
      color: 'alternative'
    };
    service.alert(config);
    service.close('successfully closed the dialog');
    expect(service.componentRef.hostView.destroyed).toBeTruthy();
  });

  it('should close the dialog through the cancel method', () => {
    const service: DialogService = TestBed.get(DialogService);
    const config = {
      size: 'small',
      color: 'alternative'
    };
    service.alert(config);
    service.cancel('canceling the dialog transaction');
    expect(service.componentRef.hostView.destroyed).toBeTruthy();
  });
});
