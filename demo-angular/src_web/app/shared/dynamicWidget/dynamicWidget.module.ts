import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicWidgetDirective } from './dynamicWidget.directive';
import { Widget1Module } from './widget1/widget1.module';
import { Widget3Module } from './widget3/widget3.module';
import { Widget4Module } from './widget4/widget4.module';
import { Widget5Module } from './widget5/widget5.module';
@NgModule({
  imports: [
    Widget1Module,
    Widget3Module,
    Widget4Module,
    Widget5Module,
    CommonModule
  ],
  declarations: [
    DynamicWidgetDirective
  ],
  exports: [
    DynamicWidgetDirective
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class DynamicModule { }
