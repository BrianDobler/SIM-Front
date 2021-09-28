import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { PrimertpComponent } from './components/primertp/primertp.component';
import { SegundotpComponent } from './components/segundotp/segundotp.component';
import { TercertpComponent } from './components/tercertp/tercertp.component';
import { CuartotpComponent } from './components/cuartotp/cuartotp.component';

const routes: Routes = [
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: 'components/inicio', component: InicioComponent },
    { path: 'components/primertp', component: PrimertpComponent },
    { path: 'components/segundotp', component: SegundotpComponent },
    { path: 'components/tercertp', component: TercertpComponent },
    { path: 'components/cuartotp', component: CuartotpComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
