import { Component } from '@angular/core';
import { ConfigService } from '../config';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent {

  sites: string[] = ['Site 1', 'Site 2', 'Site 3'];
  site: string = this.sites[0];

  constructor(private config: ConfigService) {
  }

  updateSite(item: string) {
    this.site = item;
    // this.config.

  }

}
