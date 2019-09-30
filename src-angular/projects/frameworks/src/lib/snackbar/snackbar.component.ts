import { Component,Output,EventEmitter } from '@angular/core';
import {SnackbarConfig} from './snackbar-config';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent{
  /**
   * @description on close even emitter 
   */
  @Output() didClose = new EventEmitter();
  @Output() actionClicked = new EventEmitter();


  constructor(public config:SnackbarConfig) { }
 
  /**
   * @name closeEvent
   * @description event emitter on closing of snackbar from angular component
   */
  public closeEvent(){
    this.didClose.emit(this.config);
  }

  /**
   * @name actionClicked
   * @description event emitter on clicking snackbar action button from angular component
   */
  public actionClickedEvent(){
    this.actionClicked.emit(this.config);
  }
}
