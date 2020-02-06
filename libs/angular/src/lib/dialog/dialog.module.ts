import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent, DialogModalComponent } from './dialog.component';
import { DialogDirective } from './dialog.directive';
import { DialogService } from './dialog.service';
import { ProxiesModule } from '../directives/proxies.module';

@NgModule({
  imports: [CommonModule, ProxiesModule],
  declarations: [DialogComponent, DialogModalComponent, DialogDirective],
  entryComponents: [DialogComponent, DialogModalComponent],
  providers: [DialogService]
})
export class DialogModule {}
