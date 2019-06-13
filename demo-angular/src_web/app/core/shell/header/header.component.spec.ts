import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from '@core/authentication/authentication.service';
import { MockAuthenticationService } from '@core/authentication/authentication.service.mock';
import { I18nService } from '@core/i18n.service';
import { HeaderComponent } from './header.component';
import { DebugElement } from '@angular/core';
import { SeWebModule } from '@se/web-ui-angular';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let logoutElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, BrowserAnimationsModule, TranslateModule.forRoot(), SeWebModule],
      declarations: [HeaderComponent],
      providers: [{ provide: AuthenticationService, useClass: MockAuthenticationService }, I18nService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
