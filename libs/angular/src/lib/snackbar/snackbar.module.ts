import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackbarComponent } from './snackbar.component';
import { SnackbarService } from './snackbar.service';
import { ProxiesModule } from '../directives/proxies.module';

@NgModule({
  imports: [CommonModule, ProxiesModule],
  declarations: [SnackbarComponent],
  entryComponents: [SnackbarComponent],
  providers: [SnackbarService],
})
export class SnackbarModule {}
