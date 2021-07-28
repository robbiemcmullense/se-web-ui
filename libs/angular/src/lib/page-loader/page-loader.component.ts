import { Component, TemplateRef } from '@angular/core';
import { PageLoaderConfig } from './page-loader-config';

@Component({
  selector: 'se-page-loader',
  templateUrl: './page-loader.component.html',
  styleUrls: ['./page-loader.component.scss'],
})
export class PageLoaderComponent {
  messageTemplate: TemplateRef<any>;
  constructor(public config: PageLoaderConfig) {
    this.messageTemplate = config.message as TemplateRef<any>;
  }

  get isMessageTemplate(): boolean {
    return this.config && this.config.message instanceof TemplateRef;
  }
}
