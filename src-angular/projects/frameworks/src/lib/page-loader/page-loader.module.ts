import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PageLoaderComponent } from './page-loader.component';
import { CommonModule } from '@angular/common';
import { PageLoaderService } from './page-loader.service';

@NgModule({
  imports: [CommonModule],
  declarations: [PageLoaderComponent],
  entryComponents: [PageLoaderComponent],
  providers: [PageLoaderService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PageLoaderModule {}
