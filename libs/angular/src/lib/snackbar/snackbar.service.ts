import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, EmbeddedViewRef, ComponentRef } from '@angular/core';
import { SnackbarComponent } from './snackbar.component';
import { SnackbarConfig } from './snackbar-config';
import { ComponentInjector } from '../shared/component-injector';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  /**
   * @description ComponentRef of Snackbar Component
   */
  snackbarComponentRef: ComponentRef<SnackbarComponent>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private appRef: ApplicationRef, private injector: Injector) { }

  /**
   * @name appendSnackbarComponentToBody
   * @description method to append the component to document body
   * @param config : configuration value of type SnackbarConfig
   * @returns reference of sncackbar componenet created
   */
  appendSnackbarComponentToBody(config: SnackbarConfig) {

    //create a map with the config 
    const map = new WeakMap();
    map.set(SnackbarConfig, config);

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(SnackbarComponent);
    const componentRef = componentFactory.create(new ComponentInjector(this.injector, map));
    this.appRef.attachView(componentRef.hostView);
    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
    this.snackbarComponentRef = componentRef;

    //returning snackbar component refernce
    return this.snackbarComponentRef;
  }

  /**
   * @name removeSnackBarComponent
   * @description method to remove / detach snackbar component from document body
   */
  removeSnackBarComponent() {
    this.appRef.detachView(this.snackbarComponentRef.hostView);
    this.snackbarComponentRef.destroy();
  }

  /**
   * @name open
   * @description method to open snackbar
   * @param config 
   * @returns reference of snackbar component
   */
  public open(config: SnackbarConfig) {
    if (this.snackbarComponentRef) {
      this.removeSnackBarComponent();
    }
    if (!config.type) {
      config.type = 'information';
    }
    if (!config.icon) {
      config.icon = 'information_circle';
    }
    if (!config.duration) {
      config.duration = 5000;
    }
    const ref = this.appendSnackbarComponentToBody(config);
    //subscribing SnackbarComponent instace event while closing snackbar
    const sub = this.snackbarComponentRef.instance.didClose.subscribe(() => {
      this.removeSnackBarComponent();
      sub.unsubscribe();
    });
    this.autoDismiss(config.canClose, config.duration);
    return ref;
  }

  /**
   * @name autoDismiss
   * @description method called if canClose attribute is false to close the snackbar authomatically
   * @param canClose 
   */
  autoDismiss(canClose: boolean, duration: number) {
    if (!canClose) {
      setTimeout(() => {
        this.removeSnackBarComponent();
      }, duration);
    }
  }
}