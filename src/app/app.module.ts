import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServerComponent } from './Server/server.component';
import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { warning_alert } from './Warning_Alert/warning_alert.component';
import { SuccessAlertComponent } from './SuccessAlert/success-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    warning_alert,
    SuccessAlertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
