import { Component, OnInit } from '@angular/core';
import { Logger } from '@core/logger.service';
import { WidgetCore } from '../widgetCore.component';

const log = new Logger('Widget9Component');

@Component({
  selector: 'app-widget-widget9',
  templateUrl: './widget9.component.html',
  styleUrls: ['./widget9.component.scss']
})
export class Widget9Component extends WidgetCore implements OnInit {

  public title = 'Widget 9';

  constructor() {
    super();
  }

  ngOnInit() {}

}
