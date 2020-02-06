import {
  Component,
  ViewChild,
  ComponentRef,
  OnDestroy,
  Output,
  EventEmitter,
  Type,
  ComponentFactoryResolver,
  AfterViewInit,
  ChangeDetectorRef,
  Input,
  Optional
} from '@angular/core';
import { DialogConfig } from './dialog-config';
import { DialogDirective } from './dialog.directive';

@Component({
  selector: 'lib-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  @Output() afterClosed = new EventEmitter();

  // Web-component Event accessible from dialog service to call close/cancel function
  @Output() closeEvent = new EventEmitter();

  constructor(public dialog: DialogConfig) {
  }
  @Input() type: string;
  closeDialog() {
    this.closeEvent.emit(this.dialog);
  }
  backdropClick() {
    this.closeEvent.error({type: 'backdrop'});
  }
  cancelDialog() {
    this.closeEvent.error({type: 'cancel'});
  }
}

@Component({
  selector: 'lib-dialog-modal',
  templateUrl: './dialog-modal.component.html'
})
export class DialogModalComponent implements AfterViewInit, OnDestroy {
  @Output() afterClosed = new EventEmitter();

  // Web-component Event accessible from dialog service to call close/cancel function
  @Output() closeEvent = new EventEmitter();

  @ViewChild(DialogDirective, {static: false}) insertionPoint: DialogDirective;
  childComponentType: Type<any>;
  componentRef: ComponentRef<any>;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private cd: ChangeDetectorRef,
    @Optional() public modal: DialogConfig
  ) {}
  backdropClick() {
    this.closeEvent.error({type: 'backdrop'});
  }

  ngAfterViewInit() {
    if (this.childComponentType) {
      this.loadChildComponent(this.childComponentType);
      this.cd.detectChanges();
    }
  }

  loadChildComponent(componentType: Type<any>) {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      componentType
    );
    const viewContainerRef = this.insertionPoint.viewContainerRef;
    viewContainerRef.clear();
    this.componentRef = viewContainerRef.createComponent(componentFactory);
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }
}
