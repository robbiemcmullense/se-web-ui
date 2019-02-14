import { Component, OnInit, OnDestroy } from '@angular/core';
import { Logger } from '@core/logger.service';

const log = new Logger('DocsComponent');

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})

export class DocsComponent implements OnInit, OnDestroy {

  public loader = false;

  constructor() {}

  ngOnInit() {
    log.debug('component has been initiated');
  }

  ngOnDestroy() {
    log.debug('component has been destroyed');
  }
}
