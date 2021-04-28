import {
  Injectable,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector,
  ComponentRef,
  EmbeddedViewRef,
} from '@angular/core';
import { PageLoaderComponent } from './page-loader.component';
import { ComponentInjector } from '../shared/component-injector';
import { PageLoaderConfig } from './page-loader-config';

@Injectable()
export class PageLoaderService {
  defaultConfig: PageLoaderConfig = {
    color: 'primary',
    option: 'standard',
    fullPage: true,
    overlay: true,
    message: '',
  };

  public pageLoaderComponentRef: ComponentRef<PageLoaderComponent>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef,
    private injector: Injector
  ) {}

  public show(config: PageLoaderConfig = {}) {
    const userConf: PageLoaderConfig = { ...this.defaultConfig, ...config };
    const map = new WeakMap<any, any>([[PageLoaderConfig, userConf]]);

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      PageLoaderComponent
    );
    const componentRef = componentFactory.create(
      new ComponentInjector(this.injector, map)
    );
    this.applicationRef.attachView(componentRef.hostView);
    const domElement = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    document.body.appendChild(domElement);
    this.pageLoaderComponentRef = componentRef;
  }

  public hide() {
    this.applicationRef.detachView(this.pageLoaderComponentRef.hostView);
    this.pageLoaderComponentRef.destroy();
  }
}
