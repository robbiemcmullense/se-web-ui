import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, ComponentRef, EmbeddedViewRef } from '@angular/core';
import { PageLoaderComponent } from './page-loader.component';
import { ComponentInjector } from '../shared/component-injector';

@Injectable()
export class PageLoaderService {

  public pageLoaderComponentRef: ComponentRef<PageLoaderComponent>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private applicationRef: ApplicationRef,
              private injector: Injector) {}

  public showLoader() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(PageLoaderComponent);
    const componentRef = componentFactory.create(new ComponentInjector(this.injector, new WeakMap()));
    this.applicationRef.attachView(componentRef.hostView);
    const domElement = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElement);
    this.pageLoaderComponentRef = componentRef;
  }

  public hideLoader() {
    this.applicationRef.detachView(this.pageLoaderComponentRef.hostView);
    this.pageLoaderComponentRef.destroy();
  }

}
