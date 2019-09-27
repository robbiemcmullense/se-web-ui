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
import { DialogService } from './dialog.service';

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
    this.afterClosed.emit(this.dialog);
  }
  backdropClick() {
    this.afterClosed.error('dialog backdrop clicked');
  }
  cancelDialog() {
    this.afterClosed.error('dialog cancel button clicked');
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
    private dialogService: DialogService,
    @Optional() public modal: DialogConfig
  ) {}
  backdropClick() {
    this.dialogService.close(false, 'modal backdrop clicked');
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
