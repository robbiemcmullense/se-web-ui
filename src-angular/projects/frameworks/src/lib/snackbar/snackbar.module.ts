import { NgModule,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { SnackbarComponent } from './snackbar.component';
import { SnackbarService } from './snackbar.service';
@NgModule({
  imports: [CommonModule],
  declarations: [SnackbarComponent],
  entryComponents: [SnackbarComponent],
  providers:[SnackbarService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SnackbarModule {}