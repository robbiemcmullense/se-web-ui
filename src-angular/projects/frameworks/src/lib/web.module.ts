import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {defineCustomElements as defineSeComponent} from '@se/web-ui/loader';

@NgModule({
    declarations: [],
    imports: [],
    providers: [],
    entryComponents: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SeWebModule {
    ngDoBootstrap() {
        defineSeComponent(window);
    }
}
