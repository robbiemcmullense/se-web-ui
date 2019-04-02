import { Component,ViewChild,ComponentRef,OnDestroy,Output, EventEmitter,Type,ComponentFactoryResolver,AfterViewInit,ChangeDetectorRef} from '@angular/core';
import { DialogConfig} from './dialog-config';
import { DialogDirective} from './dialog.directive';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent{
 @Output() didClose = new EventEmitter();
 @Output() backdrop = new EventEmitter();
 @Output() didConfirm = new EventEmitter();
  constructor(public dialog:DialogConfig) { }

  closeDialog(){
    this.didClose.emit(event);
  }
  backdropClick(){
    this.backdrop.emit(event);
  }
  confirmDialog(){
    this.didConfirm.emit(event);
  }

}

@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
})
export class DialogModalComponent implements AfterViewInit,OnDestroy{
  @Output() didClose = new EventEmitter();
  @Output() backdrop = new EventEmitter();

  @ViewChild(DialogDirective) insertionPoint: DialogDirective;
  childComponentType: Type<any>;
  componentRef: ComponentRef<any>;
  constructor(public modal:DialogConfig,private componentFactoryResolver: ComponentFactoryResolver, private cd: ChangeDetectorRef) { }

  closeDialog(){
    this.didClose.emit(event);
  }
  backdropClick(){
    this.backdrop.emit(event);
  }
  
  ngAfterViewInit() { 
    if(this.childComponentType){
    this.loadChildComponent(this.childComponentType);
    this.cd.detectChanges();
    }
  }
  
  loadChildComponent(componentType: Type<any>) {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
    let viewContainerRef = this.insertionPoint.viewContainerRef;
    viewContainerRef.clear();
    this.componentRef = viewContainerRef.createComponent(componentFactory);
  }

  ngOnDestroy(){
    if(this.componentRef){
      this.componentRef.destroy();
    }
  }

}
