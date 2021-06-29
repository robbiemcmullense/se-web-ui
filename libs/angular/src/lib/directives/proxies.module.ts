import { NgModule } from "@angular/core";

import { DIRECTIVES } from './proxies-list';


import { BooleanValueAccessor } from './boolean-value-accessor';
import { NumericValueAccessor } from './number-value-accessor';
import { RadioValueAccessor } from './radio-value-accessor';
import { SelectValueAccessor } from './select-value-accessor';
// import { TextValueAccessor } from './text-value-accessor';

export { BooleanValueAccessor } from './boolean-value-accessor';
export { NumericValueAccessor } from './number-value-accessor';
export { RadioValueAccessor } from './radio-value-accessor';
export { SelectValueAccessor } from './select-value-accessor';

const DECLARATION = [
  ...DIRECTIVES,
  BooleanValueAccessor,
  NumericValueAccessor,
  RadioValueAccessor,
  SelectValueAccessor,
];

@NgModule({
  imports: [],
  declarations: DECLARATION,
  exports: DECLARATION
})
export class ProxiesModule {}
