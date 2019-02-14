import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicWidgetDirective } from './dynamicWidget.directive';
import { Widget1Module } from './widget1/widget1.module';
import { Widget3Module } from './widget3/widget3.module';
import { Widget4Module } from './widget4/widget4.module';
import { Widget5Module } from './widget5/widget5.module';
import { Widget7Module } from './widget7/widget7.module';
import { Widget8Module } from './widget8/widget8.module';
import { Widget6Module } from './widget6/widget6.module';
import { Widget9Module } from './widget9/widget9.module';
import { Widget10Module } from './widget10/widget10.module';
@NgModule({
  imports: [
    Widget1Module,
    Widget3Module,
    Widget4Module,
    Widget5Module,
    Widget7Module,
    Widget8Module,
    Widget6Module,
    Widget9Module,
    Widget10Module,
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
