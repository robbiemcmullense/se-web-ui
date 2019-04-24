import { Component, OnInit } from '@angular/core';
import { Logger } from '@core/logger.service';
import { ModalExampleComponent } from './modal-example/modal-example.component';
import { ModalTableComponent } from './modal-table/modal-table.component';
import { DialogService, SnackbarService, PageLoaderService} from '@se/web-ui-angular';
const log = new Logger('HomeComponent');
const logModal = new Logger('ModalExampleComponent');
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
  public showDialogMessage: string;

  constructor(public dialogService: DialogService,
              private snackbarService: SnackbarService,
              private pageLoaderService: PageLoaderService) {}

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

  showSnackbar(): void {
    const snackbar = this.snackbarService.open({
      message: 'This is info',
      canClose:true
    })
    snackbar.instance.didClose.subscribe((data: any) => {
      // do something
      this.confirmclick();
    });
  }
  confirmclick() {
    log.debug('closed');
  }
  ngOnInit() {

  }
  //calling dialog alert service
  showDialog():void{
    const alert = this.dialogService.alert({
     message:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    });

    alert.instance.didClose.subscribe((data:any)=>{
     this.closeAlertCallback();
   });
  }
  //calling dialog alert service with icon
  showTitle():void{
    const title = this.dialogService.alert({
     title:'Dialog With Title & Icon',
     message:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
     icon:'help_wired_flat',
    });
    title.instance.didClose.subscribe((data:any)=>{
     this.closeAlertTitleCallback();
   });
   }

 //calling dialog confirm service
  showConfirm():void{
  const confirm = this.dialogService.confirm({
   title:'Dialog Confirm',
   message:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  });
  confirm.instance.didClose.subscribe((data:any)=>{
   this.closeConfirmCallback();
 });
 confirm.instance.backdrop.subscribe((data:any)=>{
   this.backdropCallback();
 });
 confirm.instance.didConfirm.subscribe((data:any)=>{
   this.okConfirmCallback();
 });
 }

 closeAlertCallback():void{
  this.showDialogMessage ="Alert Dialog closed & callback function called";
 }
 closeAlertTitleCallback():void{
  this.showDialogMessage ="Alert Dialog with title,icon closed & callback function called";
 }
 closeConfirmCallback():void{
  this.showDialogMessage ="Confirm Dialog closed & callback function called";
 }
 okConfirmCallback():void{
  this.showDialogMessage ="Confirm Dialog closed & callback function called";
 }
 backdropCallback():void{
  this.showDialogMessage ="Confirm Dialog backdrop closed & callback function called";
 }

//calling modal service
 showModal():void{
    const modal = this.dialogService.modal(ModalExampleComponent);
    modal.instance.backdrop.subscribe((data:any)=>{
    this.closeBackdropCallback();
  });
    this.showDialogMessage ="Modal Dialog";
  }
  closeBackdropCallback():void{
    this.showDialogMessage ="Modal Dialog backdrop click & callback function called";
  }

  showPageLoader(): void {
    this.pageLoaderService.showLoader();
    setTimeout(() =>  this.pageLoaderService.hideLoader(), 5000);
  }
}
