import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Http, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { SeWebModule } from '@se/web-ui-angular';
import { Widget3Component } from './widget3.component';

describe('Widget3Component', () => {
  let component: Widget3Component;
  let fixture: ComponentFixture<Widget3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SeWebModule],
        declarations: [Widget3Component],
        providers: [
          MockBackend,
          BaseRequestOptions,
          {
            provide: Http,
            useFactory: (backend: MockBackend, defaultOptions: BaseRequestOptions) => {
              return new Http(backend, defaultOptions);
            },
            deps: [MockBackend, BaseRequestOptions]
          }
        ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Widget3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
