import { NgModule } from '@angular/core';
import { PageLoaderComponent } from './page-loader.component';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';

@NgModule({
  imports: [CommonModule],
  declarations: [PageLoaderComponent],
  entryComponents: [PageLoaderComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PageLoaderModule {}
