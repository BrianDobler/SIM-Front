import { Component, OnInit } from '@angular/core';
import { Activity } from './helpers/Activity';

@Component({
    selector: 'app-cuartotp',
    templateUrl: './cuartotp.component.html',
    styleUrls: ['./cuartotp.component.css'],
})
export class CuartotpComponent implements OnInit {

    constructor() {
            
    };

    ngOnInit(): void {
        ;
    };

    A1 = new Activity('Actividad 1');
    A2 = new Activity('Actividad 2');
    A3 = new Activity('Actividad 3');
    A4 = new Activity('Actividad 4');
    A5 = new Activity('Actividad 5');

    tasks = [this.A1, this.A2, this.A3, this.A4, this.A5];
}
