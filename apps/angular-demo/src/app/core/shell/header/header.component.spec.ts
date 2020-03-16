import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SeWebModule } from '@se/web-ui-angular';
import { TranslateModule } from '@ngx-translate/core';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from '../../authentication/authentication.service';
import { MockAuthenticationService } from '../../authentication/authentication.service.mock';
import { I18nService } from '../../../core/i18n/i18n.service';
import { HeaderComponent } from './header.component';
import { HelpMenuComponent } from './help-menu/help-menu.component';
import { ModalAboutComponent } from './modal-about/modal-about.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, BrowserAnimationsModule, SeWebModule, TranslateModule.forRoot()],
      declarations: [HeaderComponent, HelpMenuComponent, ModalAboutComponent],
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
