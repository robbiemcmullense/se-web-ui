import { NgModule,    } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicModule } from './dynamicWidget/dynamicWidget.module';
import { SeWebModule } from '@se/web-ui-angular';

@NgModule({
  imports: [
    CommonModule,
    DynamicModule,
    SeWebModule
  ],
  exports: [
    DynamicModule
  ],
  entryComponents: [],
  schemas: [ ]
})
export class SharedModule {}
