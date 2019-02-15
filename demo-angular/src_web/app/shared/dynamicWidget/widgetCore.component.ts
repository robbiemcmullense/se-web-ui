import { Input, Output, EventEmitter } from '@angular/core';

export abstract class WidgetCore {
  @Input()
  public set siteId(chartId: string) {
    if (this.id !== chartId) {
      this.id = chartId;
      this.tempoRefresh();
    }
  }

  @Input() public enlarged = false;
  @Input() public toggleable = false;
  @Output() public toggle: EventEmitter<any> = new EventEmitter();


  public id: string;
  public timeout: any;
  public loader = false;

  constructor() { }

  public getData() {
    // Can be configured here if getting data just depend on the widget type name,
    // Or can be implemented per widgets
    this.loader = true;
    setTimeout(() => {
      this.loader = false;
    }, 500);
  }

  public toggleSize() {
    this.toggle.emit();
  }

  private tempoRefresh() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      // If multiple event can refresh the widget (start date, end date, site id)
      // It's better to wait before making an API call
      this.getData();
    }, 300);
  }

  // ANY FUNCTION OF GLOBAL WIDGET CONFIGURATION CAN BE ADDED HERE

}
