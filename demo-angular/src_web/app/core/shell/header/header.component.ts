import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from '@core/authentication/authentication.service';
import { environment } from '@env/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public sidenavTitle: string;
  public user: any = {};
  public appInfo: any;
  public rows: any[];
  public columns: any = [
    { prop: 'name', name: 'Nompany' },
    { prop: 'company', name: 'Company' },
    { prop: 'gender', name: 'Gender' }
  ];
  public selectable = false;

  constructor( public authenticationService: AuthenticationService, private router: Router) {}

  public logout() {
    this.authenticationService.logout();
    this.router.navigate(['/signin']);
  }

  public ngOnInit() {
    this.sidenavTitle = 'Menu';

    this.appInfo = {
      link: 'https://www.schneider-electric.com',
      logo: environment.logo,
      version: environment.version,
      title: environment.title,
      productDomain: environment.productDomain,
      image: `url(${environment.image})`,
      copyright: environment.copyright
    };
    // this.user = this.authenticationService.getUser() || {};
    // console.log(this.user)
  }

  public settings(): void {

  }


}
