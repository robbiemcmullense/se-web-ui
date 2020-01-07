import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from '@core/authentication/authentication.service';
import { environment } from '@env/environment';
import { SnackbarService } from '@se/web-ui-angular';

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

  constructor( public authenticationService: AuthenticationService, private router: Router,
    private snackbarService: SnackbarService) {}

  openSidemenuSnackbar(): void {
    const snackbar = this.snackbarService.open({
      message: 'This is info',
      type: 'success'
    });
    snackbar.instance.didClose.subscribe((data: any) => {
      // do something
      console.log('closed')
    });
  }

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
