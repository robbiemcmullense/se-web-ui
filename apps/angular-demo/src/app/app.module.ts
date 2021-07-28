import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { SeWebModule } from '@se/web-ui-angular';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { ServiceWorkerModule } from '@angular/service-worker';
import { CoreModule } from './core';
import { SharedModule } from './shared';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    SeWebModule.forRoot({ invertConfirmActions: false }),
    // ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    CoreModule,
    SharedModule,
    AppRoutingModule
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
