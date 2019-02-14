import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'modal-example',
  templateUrl: './modal-example.component.html',
  styleUrls: ['./modal-example.component.scss']
})
export class ModalExampleComponent implements OnInit {
  public title: string;

  constructor(public dialogRef: MatDialogRef<ModalExampleComponent>) {}

  ngOnInit() {
    this.title = 'Modal Header';
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
