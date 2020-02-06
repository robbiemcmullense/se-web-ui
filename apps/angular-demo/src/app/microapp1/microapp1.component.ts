import { Component, OnInit, OnDestroy } from '@angular/core';
import { Logger } from '@se/utils';
import { AuthenticationService } from '../core';

const log = new Logger('Microapp1Component');

@Component({
  selector: 'app-microapp1',
  templateUrl: './microapp1.component.html',
  styleUrls: ['./microapp1.component.scss']
})

export class Microapp1Component implements OnInit, OnDestroy {
  public user: any = {};
  public loader = false;

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit() {
    log.debug('component has been initiated');
    this.authenticationService.getUser().subscribe((user: any) => {
      this.user = user;
    });
  }

  ngOnDestroy() {
    log.debug('component has been destroyed');
  }
}
