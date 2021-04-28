import { Component, OnInit } from '@angular/core';
import { PageLoaderConfig } from './page-loader-config';

@Component({
  selector: 'se-page-loader',
  templateUrl: './page-loader.component.html',
  styleUrls: ['./page-loader.component.scss']
})
export class PageLoaderComponent implements OnInit {

  constructor(public config: PageLoaderConfig) {}

  ngOnInit() {}

}
