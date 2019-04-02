import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {SnackbarConfig} from './snackbar-config';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit {
  /**
   * @description on close even emitter 
   */
  @Output() didClose = new EventEmitter();


  constructor(public config:SnackbarConfig) { }
 
  ngOnInit() {
   
  }

  /**
   * @name closeEvent
   * @description event emitter on closing of snackbar from angular component
   */
  public closeEvent(){
    this.didClose.emit();
  }
}
