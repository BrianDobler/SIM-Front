import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

    A1 = new Activity('Actividad 1', 'uniform');
    A2 = new Activity('Actividad 2', 'uniform');
    A3 = new Activity('Actividad 3', 'exponential');
    A4 = new Activity('Actividad 4', 'uniform');
    A5 = new Activity('Actividad 5', 'exponential');

    tasks = [this.A1, this.A2, this.A3, this.A4, this.A5];

    generatorType: string = 'native-generator';
    setGenerator = (name: string) => {
        this.generatorType = name;
    };

    generatorForm: FormGroup = new FormGroup({
        seed: new FormControl('' ,Validators.required),
        mod: new FormControl('' ,Validators.required),
        a: new FormControl('' ,Validators.required),
        c: new FormControl('' ,Validators.required)
    });
}
