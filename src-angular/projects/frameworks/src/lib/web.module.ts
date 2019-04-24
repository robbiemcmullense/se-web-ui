import {
  APP_INITIALIZER,
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  ModuleWithProviders
} from "@angular/core";
import { CommonModule, DOCUMENT } from "@angular/common";
import { appInitialize } from "./initialize";
import { SnackbarModule } from './snackbar/snackbar.module';
import { DialogModule } from "./dialog/dialog.module";
import { PageLoaderModule } from './page-loader/page-loader.module';

export * from './snackbar/snackbar.service';
export * from './dialog/dialog.service';
export * from './page-loader/page-loader.service';

@NgModule({
  imports: [
    CommonModule,
    DialogModule,
    SnackbarModule,
    PageLoaderModule
  ],
  declarations: [],
  providers: [],
  entryComponents: [],
  exports: [
    SnackbarModule,
    DialogModule,
    PageLoaderModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SeWebModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SeWebModule,
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: appInitialize,
          multi: true,
          deps: [DOCUMENT]
        }
      ]
    };
  }
}
