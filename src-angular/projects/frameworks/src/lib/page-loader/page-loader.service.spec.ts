import { TestBed } from '@angular/core/testing';
import { PageLoaderModule } from './page-loader.module';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { PageLoaderService } from './page-loader.service';

describe('PageLoaderComponentService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [PageLoaderModule],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA,
      NO_ERRORS_SCHEMA
    ]
  }));

  it('should be created', () => {
    const service: PageLoaderService = TestBed.get(PageLoaderService);
    expect(service).toBeTruthy();
  });

  it('should append PageLoader to the Body', () => {
    const service: PageLoaderService = TestBed.get(PageLoaderService);
    service.showLoader();
    expect(service.pageLoaderComponentRef.instance).toBeTruthy();
    expect(service.pageLoaderComponentRef.componentType.name).toEqual('PageLoaderComponent');
    expect(service.pageLoaderComponentRef.hostView.destroyed).toBeFalsy();
  });

  it('should remove PageLoader from body', () => {
    const service: PageLoaderService = TestBed.get(PageLoaderService);
    service.showLoader();
    service.hideLoader();
    expect(service.pageLoaderComponentRef.hostView.destroyed).toBeTruthy();
  });

});
