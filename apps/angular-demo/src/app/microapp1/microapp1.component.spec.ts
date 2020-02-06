import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SeWebModule } from '@se/web-ui-angular';
import { SharedModule } from '../shared/shared.module';
import { Microapp1Component } from './microapp1.component';
import { HttpTestingController } from '@angular/common/http/testing';

describe('Microapp1Component', () => {
  let component: Microapp1Component;
  let fixture: ComponentFixture<Microapp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        imports: [
          SharedModule,
          BrowserAnimationsModule,
          SeWebModule
        ],
        declarations: [Microapp1Component],
        providers: [
          HttpTestingController,
        ]
      })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Microapp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
