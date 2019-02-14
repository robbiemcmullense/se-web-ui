import { Component, OnInit } from '@angular/core';
import { Logger } from '@core/logger.service';
import { WidgetCore } from '../widgetCore.component';

const log = new Logger('Widget1Component');

@Component({
  selector: 'app-widget-widget1',
  templateUrl: './widget1.component.html',
  styleUrls: ['./widget1.component.scss']
})
export class Widget1Component extends WidgetCore implements OnInit {

  public title = 'Widget 1';

  constructor() {
    super();
  }

  ngOnInit() {}

}
