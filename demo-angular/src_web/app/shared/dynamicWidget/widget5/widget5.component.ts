import { Component, OnInit } from '@angular/core';
import { Logger } from '@core/logger.service';
import { WidgetCore } from '../widgetCore.component';

const log = new Logger('Widget5Component');

@Component({
  selector: 'app-widget-widget5',
  templateUrl: './widget5.component.html',
  styleUrls: ['./widget5.component.scss']
})
export class Widget5Component extends WidgetCore implements OnInit {

  public title = 'Widget 5';

  constructor() {
    super();
  }

  ngOnInit() {}

}
