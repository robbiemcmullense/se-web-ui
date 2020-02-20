import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[seDialogTemplateInsertion]"
})
export class DialogDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
