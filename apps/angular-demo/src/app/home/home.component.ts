import { Component, OnInit } from '@angular/core';
import { Logger } from '@se/utils';
import { DialogService, SnackbarService } from '@se/web-ui-angular';
import { ModalTableComponent } from './modal-example/modal-example.component';

const log = new Logger('HomeComponent');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public myToggleSwitchValue = false;
  public myOnOffValue = true;
  public loader = false;
  public showDialogMessage: string;
  public listItem = [1, 2, 3, 4, 5, 5, 6, 7, 87, 8, 9, 90, 23, 24, 45, 46];

  constructor(
    public dialogService: DialogService,
    private snackbarService: SnackbarService
  ) {}

  filterChanged(event: any): void {
    console.log(event);
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
      canClose: true,
    });

    snackbar.instance.didClose.subscribe(() => {
      log.debug('closed');
    });
  }

  showDialog(): void {
    const modal = this.dialogService.confirm({
      canBackdrop: false,
      title: 'Dialog Confirm',
      message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    });

    modal.instance.afterClosed.subscribe(
      (data: any) => {
        // called when clicked on OK
        this.showDialogMessage =
          'Confirm Dialog closed & callback function called';
      },
      (err: any) => {
        // called when clicked on cancel or backdrop click
        this.showDialogMessage =
          'cancel or backdrop Dialog closed & callback function called';
      }
    );
  }

  modalTable(): void {
    const modal = this.dialogService.modal(ModalTableComponent, {
      canBackdrop: false,
      data: {
        title: 'Login',
        username: '1234User',
        password: 'mySecret',
      },
    });
    modal.instance.afterClosed.subscribe(
      (data: any) => {
        // called when clicked on OK
      },
      (err: any) => {
        // called when clicked on cancel or backdrop click
      }
    );
  }

  ngOnInit() {}
}
