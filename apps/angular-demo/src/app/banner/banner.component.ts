import { Component, OnInit, OnDestroy } from '@angular/core';
import { Logger } from '@se/utils';
import { AuthenticationService } from '../core';

const log = new Logger('BannerComponent');

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})

export class BannerComponent implements OnInit, OnDestroy {

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
