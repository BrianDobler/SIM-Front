import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PrimertpComponent } from './components/primertp/primertp.component';
import { SegundotpComponent } from './components/segundotp/segundotp.component';
import { TercertpComponent } from './components/tercertp/tercertp.component';
import { CuartotpComponent } from './components/cuartotp/cuartotp.component';

@NgModule({
    declarations: [
        AppComponent,
        InicioComponent,
        NavbarComponent,
        PrimertpComponent,
        SegundotpComponent,
        TercertpComponent,
        CuartotpComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        ChartsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
