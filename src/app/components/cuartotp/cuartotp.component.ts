import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ComponentService } from './cuartotp.service';
import { Activity } from './helpers/Activity';
import { MontecarloBody } from './helpers/MontecarloBody';

@Component({
    selector: 'app-cuartotp',
    templateUrl: './cuartotp.component.html',
    styleUrls: ['./cuartotp.component.css'],
})

export class CuartotpComponent implements OnInit {
    constructor(
        private componentService: ComponentService
    ) {};

    ngOnInit(): void { ; };

    // The activities helps for the modularity of the HTML code.
    // Classes defined under './helpers/Activity.ts'
    A1 = new Activity('Actividad 1', 'uniform', 20, 30);
    A2 = new Activity('Actividad 2', 'uniform', 30, 50);
    A3 = new Activity('Actividad 3', 'exponential', 30);
    A4 = new Activity('Actividad 4', 'uniform', 10, 20);
    A5 = new Activity('Actividad 5', 'exponential', 5);

    tasks = [this.A1, this.A2, this.A3, this.A4, this.A5];

    // The default random number generator is the native languaje generator.
    generatorType: string = 'native-generator';
    setGenerator = (name: string) => {
        this.generatorType = name;
    };

    generatorForm: FormGroup = new FormGroup({
        seed: new FormControl('' ,[Validators.required, Validators.min(0)]),
        mod: new FormControl('' ,[Validators.required, Validators.min(0)]),
        a: new FormControl('' ,[Validators.required, Validators.min(0)]),
        c: new FormControl('' ,[Validators.required, Validators.min(0)])
    });

    simulationForm: FormGroup = new FormGroup({
        numberOfSimulations: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(1000000)])
    });

    submitAll = () => {
        console.log(this.simulationForm.value);
        console.log(this.A1.distributionForm.value);
        console.log(this.A2.distributionForm.value);
        console.log(this.A3.distributionForm.value);
        console.log(this.A4.distributionForm.value);
        console.log(this.A5.distributionForm.value);
        // const body: MontecarloBody = {
        //     numberOfSimulations: this.simulationForm.value['numberOfSimulations']

        // };
    //     console.log(body);
    //     this.componentService.setSimulation()
    //         .subscribe(data => {
    //             console.log(data);
    //         });
    };
}