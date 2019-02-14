import { Component, OnInit } from '@angular/core';
import { Logger } from '@core/logger.service';
import { WidgetCore } from '../widgetCore.component';

const log = new Logger('Widget7Component');

@Component({
  selector: 'app-widget-widget7',
  templateUrl: './widget7.component.html',
  styleUrls: ['./widget7.component.scss']
})
export class Widget7Component extends WidgetCore implements OnInit {

  public title = 'Widget 7';

  constructor() {
    super();
  }

  ngOnInit() {}

}
