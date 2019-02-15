import { Component, OnInit } from '@angular/core';
import { Logger } from '@core/logger.service';
import { WidgetCore } from '../widgetCore.component';

const log = new Logger('Widget3Component');

@Component({
  selector: 'app-widget-widget3',
  templateUrl: './widget3.component.html',
  styleUrls: ['./widget3.component.scss']
})
export class Widget3Component extends WidgetCore implements OnInit {

  public title = 'Widget 3';

  constructor() {
    super();
  }

  ngOnInit() {}

}
