import { Component, OnInit } from '@angular/core';
import { Logger } from '@core/logger.service';
import { WidgetCore } from '../widgetCore.component';

const log = new Logger('Widget8Component');

@Component({
  selector: 'app-widget-widget8',
  templateUrl: './widget8.component.html',
  styleUrls: ['./widget8.component.scss']
})
export class Widget8Component extends WidgetCore implements OnInit {

  public title = 'Widget 8';

  constructor() {
    super();
  }

  ngOnInit() {}

}
