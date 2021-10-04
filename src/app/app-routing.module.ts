import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { PrimertpComponent } from './components/primertp/primertp.component';
import { SegundotpComponent } from './components/segundotp/segundotp.component';
import { TercertpComponent } from './components/tercertp/tercertp.component';
import { CuartotpComponent } from './components/cuartotp/cuartotp.component';

const routes: Routes = [
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: 'inicio', component: InicioComponent },
    { path: 'primertp', component: PrimertpComponent },
    { path: 'segundotp', component: SegundotpComponent },
    { path: 'tercertp', component: TercertpComponent },
    { path: 'cuartotp', component: CuartotpComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
