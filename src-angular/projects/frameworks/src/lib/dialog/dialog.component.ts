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
  selector: 'se-app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  @Output() afterClosed = new EventEmitter();
  constructor(public dialog: DialogConfig) {}
  @Input() type: string;
  closeDialog() {
    this.afterClosed.emit(this.dialog.data);
  }
  backdropClick() {
    this.afterClosed.error('dialog backdrop clicked ' + this.dialog.data);
  }
  cancelDialog() {
    this.afterClosed.error('dialog cancel button clicked' + this.dialog.data);
  }
}

@Component({
  selector: 'se-app-dialog-modal',
  templateUrl: './dialog-modal.component.html'
})
export class DialogModalComponent implements AfterViewInit, OnDestroy {
  @Output() afterClosed = new EventEmitter();
  @ViewChild(DialogDirective, {static: false}) insertionPoint: DialogDirective;
  childComponentType: Type<any>;
  componentRef: ComponentRef<any>;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private cd: ChangeDetectorRef,
    @Optional() public modal: DialogConfig
  ) {}
  closeDialog() {
    this.afterClosed.emit();
  }
  backdropClick() {
    this.afterClosed.error('modalclosed');
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
