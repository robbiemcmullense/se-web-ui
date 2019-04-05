import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dialogTemplateInsertion]'
})
export class DialogDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}