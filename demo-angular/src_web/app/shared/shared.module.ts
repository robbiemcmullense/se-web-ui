import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicModule } from './dynamicWidget/dynamicWidget.module';

@NgModule({
  imports: [
    CommonModule,
    DynamicModule
  ],
  exports: [
    DynamicModule
  ],
  entryComponents: []
})
export class SharedModule {}
