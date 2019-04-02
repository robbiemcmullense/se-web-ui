import { Component, OnInit } from '@angular/core';
import { DialogService} from '@se/web-ui-angular';

@Component({
  selector: 'app-modal-example',
  templateUrl: './modal-example.component.html',
  styleUrls: ['./modal-example.component.scss']
})
export class ModalExampleComponent implements OnInit {
  constructor(private dialog:DialogService) { }

  ngOnInit() {

  }
  closeModal() {
    console.log("close modal by calling service method");
    this.dialog.close();
  }
  submitModal(){
    console.log("submit modal form");
    this.dialog.close();
  }
}
