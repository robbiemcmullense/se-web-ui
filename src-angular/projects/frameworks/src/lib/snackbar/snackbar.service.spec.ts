import { TestBed } from '@angular/core/testing';
import { SnackbarService } from './snackbar.service';
import { SnackbarConfig } from './snackbar-config';
import { SnackbarModule } from './snackbar.module';
import { ProxiesModule } from '../directives/proxies.module';

describe('SnackbarService', () => {
  let config: SnackbarConfig;
  let service: SnackbarService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [SnackbarModule, ProxiesModule]
  }));
  beforeEach(() => {
    config = new SnackbarConfig();
    service = TestBed.get(SnackbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call append Snackbar Component To Body',()=>{
    config = {
      type: 'success',
      message: 'This is info',
      canClose: true,
      icon: 'information_stroke',
      duration: 500
    }
    const result = service.appendSnackbarComponentToBody(config);
    expect(result.instance).toBeTruthy();
    expect(result.componentType.name).toEqual('SnackbarComponent');
    expect(result.hostView.destroyed).toBeFalsy();
  });

  it('should set open property true', () => {
    const item = service.open({
      type: 'success',
      message: 'This is info',
      canClose: true,
      icon: 'information_stroke',
      duration: 500
    });
    expect(item.instance).toBeDefined();
  });

  it('should set the default icon and type when those properties are not defined', () => {
    const item = service.open({
      message: 'This is info',
      canClose: true
    });
    expect(item.instance.config.type).toEqual('information');
    expect(item.instance.config.icon).toEqual('information_circle');
  });

  it('should remove snackbar', () => {
    service.open({
      type: 'success',
      message: 'This is info',
      canClose: true,
      icon: 'information_stroke',
    });
    service.removeSnackBarComponent();
    expect(service.snackbarComponentRef.hostView.destroyed).toBeTruthy();
  });

  it('should auto remove snackbar after certain time duration', () => {
    jasmine.clock().uninstall();
    jasmine.clock().install();
    service.open({
      type: 'success',
      message: 'This is info',
      canClose: false,
      icon: 'information_stroke',
      duration: 500
    });
    jasmine.clock().tick(600);
    expect(service.snackbarComponentRef.hostView.destroyed).toBeTruthy();
    jasmine.clock().uninstall();
  });
});