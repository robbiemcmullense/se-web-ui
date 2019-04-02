import { Component, OnInit } from '@angular/core';
import { Logger } from '@core/logger.service';
import { ModalExampleComponent } from './modal-example/modal-example.component';
import { ModalTableComponent } from './modal-table/modal-table.component';
import { DialogService} from '@se/web-ui-angular';
const log = new Logger('HomeComponent');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public rows: any = [];
  public columns: any = [
    { prop: 'name', name: 'Nompany' },
    { prop: 'company', name: 'Company' },
    { prop: 'gender', name: 'Gender' }
  ];
  public selected: any = [];
  public page: any = {};
  public selectable = true;
  public loader = false;
  public loaderTable = false;

  constructor(public dialogSvc:DialogService) {}

  modalAlert(type: 'success' | 'warning' | 'error'): void {
    log.debug('modalAlert type', type);

  }

  modalConfirm(type: 'success' | 'warning' | 'error'): void {
    log.debug('modalConfirm type', type);
  }

  modalExample(): void {
  }

  modalTable(): void {

  }

  showSnackbar(type: 'info' | 'success' | 'warning' | 'error', showIcon: boolean, message: string): void {

  }

  ngOnInit() {

  }
  //calling dialog alert service
  showDialog(){
    const alert = this.dialogSvc.alert({
     open:true, 
     size:'small',
     message:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
     textOK:'Ok'
    });
    
    alert.instance.didClose.subscribe((data:any)=>{
     console.log('Alert Dialog closed & sent callback',data);
     this.closeAlertCallback();
   });
  }
  //calling dialog alert service with icon
  showTitle(){
    const title = this.dialogSvc.alert({
     open:true, 
     size:'medium',
     color:'alternative',
     title:'Dialog With Title & Icon',
     message:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
     icon:'help_wired_flat',
     iconColor:'primary',
     textOK:'Yes',
    });
    title.instance.didClose.subscribe((data:any)=>{
     console.log('Confirm Dialog closed & sent callback',data);
     this.closeAlertCallback();
   });
   }
 
 //calling dialog confirm service
  showConfirm(){
  const confirm = this.dialogSvc.confirm({
   open:true, 
   size:'medium',
   color:'alternative',
   title:'Dialog Confirm',
   message:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
   textOK:'Yes',
   textCancel:'No'
  });
  confirm.instance.didClose.subscribe((data:any)=>{
   console.log('Confirm Dialog closed & sent callback',data);
   this.closeConfirmCallback();
 });
 confirm.instance.backdrop.subscribe((data:any)=>{
   console.log('Alert Dialog backdrop click& sent callback',data);
   this.closeConfirmCallback();
 });
 confirm.instance.didConfirm.subscribe((data:any)=>{
   console.log('Alert Dialog backdrop click& sent callback',data);
   this.okConfirmCallback();
 });
 }

 closeAlertCallback(){
   console.log("close alert call back function");
 }

 closeConfirmCallback(){
   console.log("close confirm call back function");
 }
 okConfirmCallback(){
   console.log("ok confirm call back function");
 }

//calling modal service
 showModal(){
    this.dialogSvc.modal(ModalExampleComponent,{
      open:true, 
      size:'small',
      color:'alternative'
    }      
   ); 
  }
  
}
