import { Component, OnInit, OnDestroy } from '@angular/core';
import { Logger } from '@se/utils';
import { AuthenticationService } from '../core';

const log = new Logger('Microapp2Component');

@Component({
  selector: 'app-microapp2',
  templateUrl: './microapp2.component.html',
  styleUrls: ['./microapp2.component.scss']
})

export class Microapp2Component implements OnInit, OnDestroy {

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
