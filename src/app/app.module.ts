import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PrimertpComponent } from './components/primertp/primertp.component';
import { SegundotpComponent } from './components/segundotp/segundotp.component';
import { TercertpComponent } from './components/tercertp/tercertp.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PrimertpComponent,
    SegundotpComponent,
    TercertpComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [[]],
  bootstrap: [AppComponent]
})
export class AppModule { }
