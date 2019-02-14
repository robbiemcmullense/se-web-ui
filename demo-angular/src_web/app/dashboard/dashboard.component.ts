import { Component, OnInit, OnDestroy } from '@angular/core';
import {BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import { Logger } from '@core/logger.service';

const log = new Logger('DashboardComponent');

export interface ITile {
  cols: number;
  widgetType: string;
}

export interface ISite {
  name: string;
  id: string;
}

const COLUMNS = {
  'Small': 1,
  'Medium': 2,
  'Large': 3,
  'XLarge': 4
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit, OnDestroy {

  public loader = false;
  public obsBreak: any;
  public nbCols = 2;
  public selectedSite: string;

  tiles: ITile[] = [
          {widgetType : 'widget1', cols: 1},
          {widgetType : 'widget1', cols: 1},
          {widgetType : 'widget3', cols: 1},
          {widgetType : 'widget4', cols: 1},
          {widgetType : 'widget5', cols: 1},
          {widgetType : 'widget7', cols: 1},
          {widgetType : 'widget8', cols: 1},
          {widgetType : 'widget6', cols: 1},
          {widgetType : 'widget9', cols: 1},
          {widgetType : 'widget10', cols: 1}
      ];

  sites: ISite[] = [
    {name: 'building 1', id: '111'},
    {name: 'building 2', id: '222'},
    {name: 'building 3', id: '124'},
    {name: 'building 4', id: '125'},
    {name: 'building 5', id: '126'},
    {name: 'building 6', id: '127'}
  ];

  constructor(public breakpointObserver: BreakpointObserver) {}

  changeSite(siteId: string) {
    this.selectedSite = siteId;
  }

  toggleSize(ev: any, tile: ITile) {
    tile.cols = tile.cols === 1 ? 2 : 1;
  }

  updateColumnConf(): void {
    if (this.breakpointObserver.isMatched(Breakpoints.Small)) {
      this.tiles.forEach((tile: ITile) => {
        tile.cols = 1;
      });
      this.nbCols = COLUMNS.Small;
    } else if (this.breakpointObserver.isMatched(Breakpoints.Medium)) {
      this.nbCols = COLUMNS.Medium;
    } else if (this.breakpointObserver.isMatched(Breakpoints.Large)) {
      this.nbCols = COLUMNS.Large;
    } else {
      this.nbCols = COLUMNS.XLarge;
    }
  }

  ngOnInit() {
    this.selectedSite = this.sites[0].id;
    this.updateColumnConf();
    this.obsBreak = this.breakpointObserver.observe([
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]).subscribe((result: BreakpointState) => {
      if (result.matches) {
        this.updateColumnConf();
      }
    });
  }

  ngOnDestroy() {
    this.obsBreak.unsubscribe();
  }
}
