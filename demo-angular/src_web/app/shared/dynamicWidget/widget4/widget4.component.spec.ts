import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Http, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { SeWebModule } from '@se/web-ui-angular';
import { Widget4Component } from './widget4.component';

describe('Widget4Component', () => {
  let component: Widget4Component;
  let fixture: ComponentFixture<Widget4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [SeWebModule],
        declarations: [Widget4Component],
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
    fixture = TestBed.createComponent(Widget4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
