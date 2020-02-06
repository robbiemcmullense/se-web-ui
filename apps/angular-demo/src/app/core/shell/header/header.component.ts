import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../authentication/authentication.service';
import { environment } from '../../../../environments/environment';
import { I18nService } from '../../i18n/i18n.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public sidemenuTitle: string;
  public user: any = {};
  public appInfo: any;
  public rows: any[];
  public columns: any = [
    { prop: 'name', name: 'Nompany' },
    { prop: 'company', name: 'Company' },
    { prop: 'gender', name: 'Gender' }
  ];
  public selectable = false;

  constructor(
    public authenticationService: AuthenticationService,
    private router: Router,
    private i18nService: I18nService
    ) {}

  get selectedLanguage(): string {
    return this.i18nService.language;
  }

  set selectedLanguage(language: string) {
    this.i18nService.language = language;
  }

  get supportedLanguages(): string[] {
    return this.i18nService.supportedLanguages;
  }

  public logout() {
    this.authenticationService.logout();
    this.router.navigate(['/signin']);
  }

  public ngOnInit() {
    this.sidemenuTitle = 'Menu';

    this.appInfo = {
      link: 'https://www.schneider-electric.com',
      logo: environment.logo,
      version: environment.version,
      title: environment.title,
      productDomain: environment.productDomain,
      image: `url(${environment.image})`,
      copyright: environment.copyright
    };

    this.authenticationService.getUser().subscribe((user: any) => {
      this.user = user;
    });

  }

  public settings(): void {

  }

}
