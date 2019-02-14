import {
  ComponentFactoryResolver, ComponentRef, Directive, Input, OnChanges,
  OnDestroy, Output, OnInit, Type, ViewContainerRef, EventEmitter
} from '@angular/core';
import { Widget1Component } from './widget1/widget1.component';
import { Widget3Component } from './widget3/widget3.component';
import { Widget4Component } from './widget4/widget4.component';
import { Widget5Component } from './widget5/widget5.component';
import { Widget7Component } from './widget7/widget7.component';
import { Widget8Component } from './widget8/widget8.component';
import { Widget6Component } from './widget6/widget6.component';
import { Widget9Component } from './widget9/widget9.component';
import { Widget10Component } from './widget10/widget10.component';

const components: { [type: string]: Type<any> } = {
  widget1: Widget1Component,
  widget3: Widget3Component,
  widget4: Widget4Component,
  widget5: Widget5Component,
  widget7: Widget7Component,
  widget8: Widget8Component,
  widget6: Widget6Component,
  widget9: Widget9Component,
  widget10: Widget10Component,
};

export interface IWidget {
  type: string;
  siteId: string;
}

@Directive({
  selector: '[dynamicWidget]'
})

export class DynamicWidgetDirective implements IWidget, OnChanges, OnInit, OnDestroy {

  @Input() public type: string;

  // List here all common input for each widget. Each property will then be pass down to the widget
  @Input() public siteId: string;
  @Input() public enlarged = false;
  @Input() public toggleable = false;
  @Output() public toggle: EventEmitter<any> = new EventEmitter();

  component: ComponentRef<any>;

  constructor(private resolver: ComponentFactoryResolver, private container: ViewContainerRef) { }

  ngOnChanges() {
    if (this.component) {
      this.updateInstance();
    }
  }

  ngOnInit() {
    if (!components[this.type]) {
      const supportedTypes = Object.keys(components).join(', ');
      throw new Error(
        `Trying to use an unsupported type (${this.type}). Supported types: ${supportedTypes}`
      );
    }

    const component = this.resolver.resolveComponentFactory<any>(components[this.type]);
    this.component = this.container.createComponent(component);
    // Link all outputs of the widgets here
    this.component.instance.toggle = this.toggle;

    // Update all inputs
    this.updateInstance();
  }

  updateInstance() {
    // Each input property needs to be pass down to the widget
    this.component.instance.siteId = this.siteId;
    this.component.instance.enlarged = this.enlarged;
    this.component.instance.toggleable = this.toggleable;
  }

  ngOnDestroy() {
    this.component.destroy();
  }
}
