import { Inject, Component } from '@angular/core';
import { DialogService, MODAL_DATA} from '@se/web-ui-angular';

@Component({
  selector: 'app-modal-example',
  templateUrl: './modal-example.component.html',
  styleUrls: ['./modal-example.component.scss']
})

export class ModalTableComponent {
  username: string;
  password: string;

  constructor(private dialog: DialogService, @Inject(MODAL_DATA) public data: any) {
    this.username = data.username;
    this.password = data.password;
  }

  closeModal() {
    this.dialog.cancel('clicked cancel');
  }

  submitModal() {
    this.dialog.close({user: this.username, password: this.password});
  }
}
