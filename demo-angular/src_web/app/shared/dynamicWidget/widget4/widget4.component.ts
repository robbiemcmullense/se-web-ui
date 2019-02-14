import { Component, OnInit } from '@angular/core';
import { Logger } from '@core/logger.service';
import { WidgetCore } from '../widgetCore.component';

const log = new Logger('Widget4Component');

@Component({
  selector: 'app-widget-widget4',
  templateUrl: './widget4.component.html',
  styleUrls: ['./widget4.component.scss']
})
export class Widget4Component extends WidgetCore implements OnInit {

  public title = 'Widget 4';

  constructor() {
    super();
  }

  ngOnInit() {}

}
