import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { appInitialize } from './initialize';
import { SnackbarModule } from './snackbar/snackbar.module';
import { DialogModule } from './dialog/dialog.module';
import { PageLoaderModule } from './page-loader/page-loader.module';
import { ProxiesModule } from './directives/proxies.module';

export * from './snackbar/snackbar.service';
export * from './dialog/dialog.service';
export * from './dialog/dialog-config';
export * from './page-loader/page-loader.service';
export * from './directives/proxies';
export * from './directives/proxies.module';
export * from './snackbar/snackbar.module';
export * from './dialog/dialog.module';
export * from './page-loader/page-loader.module';

@NgModule({
  imports: [
    CommonModule,
    DialogModule,
    SnackbarModule,
    PageLoaderModule,
    ProxiesModule,
  ],
  declarations: [],
  providers: [],
  exports: [ProxiesModule, SnackbarModule, DialogModule, PageLoaderModule],
})
export class SeWebModule {
  static forRoot() {
    return {
      ngModule: SeWebModule,
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: appInitialize,
          multi: true,
        },
      ],
    };
  }
}
