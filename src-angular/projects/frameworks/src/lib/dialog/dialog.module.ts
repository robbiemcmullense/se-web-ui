import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent, DialogModalComponent } from './dialog.component';
import { DialogDirective } from './dialog.directive';
import { DialogService } from './dialog.service';
@NgModule({
  imports: [CommonModule],
  declarations: [DialogComponent, DialogModalComponent, DialogDirective],
  entryComponents: [DialogComponent, DialogModalComponent],
  providers: [DialogService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DialogModule {}
