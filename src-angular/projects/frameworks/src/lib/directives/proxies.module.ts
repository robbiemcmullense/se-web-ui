import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DIRECTIVES } from './proxies-list';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: DIRECTIVES,
  exports: DIRECTIVES
})
export class ProxiesModule {}
