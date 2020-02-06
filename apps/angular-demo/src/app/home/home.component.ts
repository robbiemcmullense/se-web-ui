import { Component, OnInit } from '@angular/core';
import { Logger } from '@se/utils';
import { DialogService, SnackbarService } from '@se/web-ui-angular';

const log = new Logger('HomeComponent');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public loader = false;
  public showDialogMessage: string;

  constructor(public dialogService: DialogService, private snackbarService: SnackbarService) { }

  filterChanged(event: any): void {
    console.log(event);
  }

  handleOnOff($event: any): void {
    document.getElementById('switch-header').style.backgroundColor = $event.detail.selected ? '#eee' : '#fff';
  }

  handleToggle($event: any): void {
    document.getElementById('switch-footer').style.backgroundColor = $event.detail.selected ? '#eee' : '#fff';
  }

  startLoading(): void {
    this.loader = true;
    setTimeout(() => {
      this.loader = false;
    }, 3000);
  }

  showSnackbar(): void {
    const snackbar = this.snackbarService.open({
      message: 'This is some info',
      type: 'information',
      canClose: true
    });

    snackbar.instance.didClose.subscribe(() => {
      log.debug('closed');
    });
  }

  showDialog(): void {
    const confirm = this.dialogService.confirm({
      title: 'Dialog Confirm',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    });

    confirm.instance.didClose.subscribe(() => {
      this.showDialogMessage = "Confirm Dialog closed & callback function called";
    });

    confirm.instance.backdrop.subscribe(() => {
      this.showDialogMessage ="Confirm Dialog backdrop closed & callback function called";
    });

    confirm.instance.didConfirm.subscribe(() => {
      this.showDialogMessage ="Confirm Dialog closed & callback function called";
    });
  }

  ngOnInit() {

  }
}
