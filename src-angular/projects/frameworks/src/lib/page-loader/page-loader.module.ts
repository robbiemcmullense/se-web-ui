import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PageLoaderComponent } from './page-loader.component';
import { CommonModule } from '@angular/common';
import { PageLoaderService } from './page-loader.service';
import { ProxiesModule } from '../directives/proxies.module';

@NgModule({
  imports: [CommonModule, ProxiesModule],
  declarations: [PageLoaderComponent],
  entryComponents: [PageLoaderComponent],
  providers: [PageLoaderService],
})
export class PageLoaderModule {}
