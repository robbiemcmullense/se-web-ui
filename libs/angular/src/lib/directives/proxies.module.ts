import { NgModule } from "@angular/core";

import { DIRECTIVES } from './proxies-list';


import { BooleanValueAccessor } from './boolean-value-accessor';
import { NumericValueAccessor } from './number-value-accessor';
import { RadioValueAccessor } from './radio-value-accessor';
import { SelectValueAccessor } from './select-value-accessor';
import { TextValueAccessor } from './text-value-accessor';

const DECLARATION = [
  ...DIRECTIVES,
  BooleanValueAccessor,
  NumericValueAccessor,
  TextValueAccessor,
  RadioValueAccessor,
  SelectValueAccessor,
];

@NgModule({
  imports: [],
  declarations: DECLARATION,
  exports: DECLARATION
})
export class ProxiesModule {}
