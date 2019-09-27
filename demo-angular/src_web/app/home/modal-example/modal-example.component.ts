import { Component, OnInit } from '@angular/core';
import { DialogService} from '@se/web-ui-angular';
import {Logger} from '@core/logger.service';
const log = new Logger('ModalExampleComponent');

@Component({
  selector: 'app-modal-example',
  templateUrl: './modal-example.component.html',
  styleUrls: ['./modal-example.component.scss']
})
export class ModalExampleComponent implements OnInit {
  value: string;
  constructor(private dialog:DialogService) { }

  ngOnInit() {

  }
  closeModal() {
    log.debug("close modal by calling service method");
    this.dialog.close(false, 'clicked cancel');
  }
  submitModal(){
    log.debug("submit modal form");
    this.dialog.close(true, this.value);
  }
}
