import { Component, OnInit, Inject } from '@angular/core';
import { DialogService, MODAL_DATA} from '@se/web-ui-angular';
import {Logger} from '@core/logger.service';
const log = new Logger('ModalExampleComponent');

@Component({
  selector: 'app-modal-example',
  templateUrl: './modal-example.component.html',
  styleUrls: ['./modal-example.component.scss']
})
export class ModalExampleComponent implements OnInit {
  username: string;
  password: string;
  constructor(private dialog: DialogService, @Inject(MODAL_DATA) public data: any) {
    this.username = data.username;
    this.password = data.password;
  }

  ngOnInit() {

  }
  closeModal() {
    log.debug("close modal by calling service method");
    this.dialog.cancel('clicked cancel');
  }
  submitModal(){
    log.debug("submit modal form");
    this.dialog.close({user: this.username, password: this.password});
  }
}
