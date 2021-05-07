import { Component, TemplateRef } from '@angular/core';
import { PageLoaderConfig } from './page-loader-config';

@Component({
  selector: 'se-page-loader',
  templateUrl: './page-loader.component.html',
  styleUrls: ['./page-loader.component.scss'],
})
export class PageLoaderComponent {
  constructor(public config: PageLoaderConfig) {}

  get isMessageTemplate(): boolean {
    return this.config && this.config.message instanceof TemplateRef;
  }
}
