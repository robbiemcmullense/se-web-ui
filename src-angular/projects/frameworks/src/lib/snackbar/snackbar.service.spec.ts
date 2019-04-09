import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { SnackbarService } from './snackbar.service';
import { SnackbarComponent } from './snackbar.component';
import { SnackbarConfig } from './snackbar-config';
import { SnackbarInjector } from './snackbar-injector';
import { SnackbarModule } from './snackbar.module';

describe('SnackbarService', () => {
  let config: SnackbarConfig;
  let inject: SnackbarInjector;
  let component: SnackbarComponent;
  let fixture: ComponentFixture<SnackbarComponent>;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [SnackbarModule],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA
    ]
  }));
  beforeEach(() => {
    config = new SnackbarConfig();
  });

  it('should be created', () => {
    const service: SnackbarService = TestBed.get(SnackbarService);
    expect(service).toBeTruthy();
  });

  it('should call append Snackbar Component To Body',()=>{
    const service: SnackbarService = TestBed.get(SnackbarService);
    const config:SnackbarConfig={
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
    const service: SnackbarService = TestBed.get(SnackbarService);
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
    const service: SnackbarService = TestBed.get(SnackbarService);
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
    const service: SnackbarService = TestBed.get(SnackbarService);
    service.open({
      type: 'success',
      message: 'This is info',
      canClose: false,
      closeText: 'Dismiss',
      icon: 'information_stroke',
      duration:500
    });
    //service.autoDismiss(true, 500);
    jasmine.clock().tick(600);
    expect(service.snackbarComponentRef.hostView.destroyed).toBeTruthy();
    jasmine.clock().uninstall();
     
  });

});
