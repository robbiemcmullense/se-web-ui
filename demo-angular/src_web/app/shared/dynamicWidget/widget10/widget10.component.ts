import { Component, OnInit } from '@angular/core';
import { Logger } from '@core/logger.service';
import { WidgetCore } from '../widgetCore.component';

const log = new Logger('Widget10Component');

@Component({
  selector: 'app-widget-widget10',
  templateUrl: './widget10.component.html',
  styleUrls: ['./widget10.component.scss']
})
export class Widget10Component extends WidgetCore implements OnInit {

  public title = 'Widget 10';

  constructor() {
    super();
  }

  ngOnInit() {}

}
