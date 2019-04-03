import { Component, OnInit } from '@angular/core';
 import { Logger } from '../../../src_common/core/logger.service';
 import {SnackbarService} from '@se/web-ui-angular';

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
  
  constructor(private snackbarSvc:SnackbarService) {}

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
    const snackbar=  this.snackbarSvc.open({
      open:true,
      message: 'This is info',
      canClose:true,
      closeText:'Dismiss',
      icon:'information_stroke',
     // duration:800
    })
    snackbar.instance.didClose.subscribe((data:any) => {
      // do something
      this.confirmclick();
    });
  }
  confirmclick(){
    log.debug('closed');
  }
  ngOnInit() {

  }
}
