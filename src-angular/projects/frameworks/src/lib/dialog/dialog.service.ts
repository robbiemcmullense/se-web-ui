import {
  Injectable,
  Injector,
  InjectionToken,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  ComponentRef,
  ApplicationRef,
  Type
} from '@angular/core';

import {
  DialogComponent,
  DialogModalComponent
} from '../dialog/dialog.component';
import { DialogConfig } from '../dialog/dialog-config';
import { ComponentInjector } from '../shared/component-injector';

/** Injection token that can be used to access the data that was passed in to a dialog. */
export const MODAL_DATA = new InjectionToken<any>('ModalData');


@Injectable({
  providedIn: 'root'
})
export class DialogService {
  dialogRef: ComponentRef<DialogComponent>;
  modalRef: ComponentRef<DialogModalComponent>;

  public componentRef: ComponentRef<any>;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  /**
   * @description method to create dialog component dynamically
   */
  public createDialogComponent(
    componentType: Type<any>,
    config?: DialogConfig
  ) {

    const userConf = config || {};
    // MODAL_DATA added as DI based on config.data
    const map = new WeakMap<any, any>([
      [MODAL_DATA, config.data]
    ]);

    map.set(DialogConfig, userConf);
    this.componentRef = this.componentFactoryResolver
      .resolveComponentFactory(componentType)
      .create(new ComponentInjector(this.injector, map));
    this.appRef.attachView(this.componentRef.hostView);
    const domElem = (this.componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);
    return this.componentRef;
  }

  /**
   * @description method to open alert dialog
   */

  public alert(config: DialogConfig) {
    const alertDialogRef = this.createDialogComponent(DialogComponent, config);
    alertDialogRef.instance.type = 'alert';
    return alertDialogRef;
  }
  /**
   * @description method to open confirm dialog
   */
  public confirm(config: DialogConfig) {
    const confirmDialogRef = this.createDialogComponent(DialogComponent, config);
    confirmDialogRef.instance.type = 'confirm';
    return confirmDialogRef;
  }
  /**
   * @description method to open modal dialog
   */

  public modal(componentType: Type<any>, config?: DialogConfig) {
    const modalDialogRef = this.createDialogComponent(
      DialogModalComponent,
      config
    );
    this.componentRef.instance.childComponentType = componentType;
    return modalDialogRef;
  }

  /**
   * @description method to close the dialog by setting close property to true
   */
  public close(data: any) {
    this.componentRef.instance.afterClosed.emit(data);
    this.appRef.detachView(this.componentRef.hostView);
    this.componentRef.destroy();
  }
  /**
   * @description method to close the dialog by setting close property to true
   */
  public cancel(data: any) {
    this.componentRef.instance.afterClosed.error(data);
    this.appRef.detachView(this.componentRef.hostView);
    this.componentRef.destroy();
  }
}
