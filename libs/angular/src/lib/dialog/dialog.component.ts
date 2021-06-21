import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  EventEmitter,
  Input,
  OnDestroy,
  Optional,
  Output,
  Type,
  ViewChild,
} from '@angular/core';
import { DialogConfig } from './dialog-config';
import { DialogDirective } from './dialog.directive';

interface DialogAction {
  label: string;
  option: string;
  action: () => void;
}

@Component({
  selector: 'se-ng-dialog',
  templateUrl: './dialog.component.html',
})
export class DialogComponent {
  @Output() afterClosed = new EventEmitter();

  // Web-component Event accessible from dialog service to call close/cancel function
  @Output() closeEvent = new EventEmitter();

  @Input() type: string;

  readonly confirmActions: DialogAction[] = [];

  constructor(public dialog: DialogConfig) {
    this.confirmActions = [
      {
        label: this.dialog.textCancel || 'Cancel',
        option: 'outline',
        action: () => {
          this.cancelDialog();
        },
      },
      {
        label: this.dialog.textOK || 'Ok',
        option: '',
        action: () => {
          this.closeDialog();
        },
      },
    ];
    if (this.dialog.flipConfirmActions) {
      this.confirmActions.reverse();
    }
  }

  closeDialog(): void {
    this.closeEvent.emit(this.dialog);
  }

  backdropClick(): void {
    this.closeEvent.error({ type: 'backdrop' });
  }

  cancelDialog(): void {
    this.closeEvent.error({ type: 'cancel' });
  }
}

@Component({
  selector: 'se-dialog-modal',
  templateUrl: './dialog-modal.component.html',
})
export class DialogModalComponent implements AfterViewInit, OnDestroy {
  @Output() afterClosed = new EventEmitter();

  // Web-component Event accessible from dialog service to call close/cancel function
  @Output() closeEvent = new EventEmitter();

  @ViewChild(DialogDirective, { static: false })
  insertionPoint: DialogDirective;

  childComponentType: Type<any>;
  componentRef: ComponentRef<any>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private cd: ChangeDetectorRef,
    @Optional() public modal: DialogConfig
  ) {}

  ngAfterViewInit(): void {
    if (this.childComponentType) {
      this.loadChildComponent(this.childComponentType);
      this.cd.detectChanges();
    }
  }

  ngOnDestroy(): void {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  backdropClick(): void {
    this.closeEvent.error({ type: 'backdrop' });
  }

  private loadChildComponent(componentType: Type<any>): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      componentType
    );
    const viewContainerRef = this.insertionPoint.viewContainerRef;
    viewContainerRef.clear();
    this.componentRef = viewContainerRef.createComponent(componentFactory);
  }
}
