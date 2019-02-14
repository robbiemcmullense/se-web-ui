import { Component, OnInit } from '@angular/core';
import { Logger } from '@core/logger.service';
import { WidgetCore } from '../widgetCore.component';

const log = new Logger('Widget6Component');

@Component({
  selector: 'app-widget-widget6',
  templateUrl: './widget6.component.html',
  styleUrls: ['./widget6.component.scss']
})
export class Widget6Component extends WidgetCore implements OnInit {

  public title = 'Widget 6';

  constructor() {
    super();
  }

  ngOnInit() {}

}
