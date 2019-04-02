import {
  APP_INITIALIZER,
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  ModuleWithProviders
} from "@angular/core";
import { CommonModule, DOCUMENT } from "@angular/common";
import { appInitialize } from "./initialize";
import {SnackbarModule} from './snackbar/snackbar.module';
export * from './snackbar/snackbar.service';

@NgModule({
  imports: [CommonModule,SnackbarModule],
  declarations: [],
  providers: [],
  entryComponents: [],
  exports:[SnackbarModule],
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
