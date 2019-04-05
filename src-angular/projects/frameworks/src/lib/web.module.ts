import { DialogService } from './dialog/dialog.service';
import {
  APP_INITIALIZER,
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  ModuleWithProviders
} from "@angular/core";
import { CommonModule, DOCUMENT } from "@angular/common";
import { appInitialize } from "./initialize";
import { DialogModule} from "./dialog/dialog.module";
export { DialogService} from "./dialog/dialog.service";
@NgModule({
  imports: [CommonModule,DialogModule],
  declarations: [],
  providers: [],
  entryComponents: [],
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
