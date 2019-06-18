import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Http, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { SeWebModule } from '@se/web-ui-angular';
import { Widget1Component } from './widget1.component';

describe('Widget1Component', () => {
  let component: Widget1Component;
  let fixture: ComponentFixture<Widget1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [SeWebModule],
        declarations: [Widget1Component],
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
    fixture = TestBed.createComponent(Widget1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
