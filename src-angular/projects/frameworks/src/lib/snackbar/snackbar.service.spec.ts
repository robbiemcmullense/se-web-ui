import { TestBed, ComponentFixture } from '@angular/core/testing';
import { SnackbarService } from './snackbar.service';
import { SnackbarComponent } from './snackbar.component';
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
      closeText: 'Dismiss',
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
      closeText: 'Dismiss',
      icon: 'information_stroke',
      duration: 500
    })
    expect(item.instance).toBeDefined();
  });

  it('should remove snackbar', () => {
    service.open({
      type: 'success',
      message: 'This is info',
      canClose: true,
      closeText: 'Dismiss',
      icon: 'information_stroke',
    })
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
      closeText: 'Dismiss',
      icon: 'information_stroke',
      duration: 500
    });
    jasmine.clock().tick(600);
    expect(service.snackbarComponentRef.hostView.destroyed).toBeTruthy();
    jasmine.clock().uninstall();
  });
});