import { TestBed } from '@angular/core/testing';
import { PageLoaderModule } from './page-loader.module';
import { ProxiesModule } from '../directives/proxies.module';
import { PageLoaderService } from './page-loader.service';

describe('PageLoaderComponentService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [PageLoaderModule, ProxiesModule]
  }));

  it('should be created', () => {
    const service: PageLoaderService = TestBed.get(PageLoaderService);
    expect(service).toBeTruthy();
  });

  it('should append PageLoader to the Body', () => {
    const service: PageLoaderService = TestBed.get(PageLoaderService);
    service.show();
    expect(service.pageLoaderComponentRef.instance).toBeTruthy();
    expect(service.pageLoaderComponentRef.componentType.name).toEqual('PageLoaderComponent');
    expect(service.pageLoaderComponentRef.hostView.destroyed).toBeFalsy();
  });

  it('should remove PageLoader from body', () => {
    const service: PageLoaderService = TestBed.get(PageLoaderService);
    service.show();
    service.hide();
    expect(service.pageLoaderComponentRef.hostView.destroyed).toBeTruthy();
  });

});
