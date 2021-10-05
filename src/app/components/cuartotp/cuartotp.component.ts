import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ComponentService } from './cuartotp.service';
import { Activity } from './helpers/Activity';
import { ActivityModel } from './models/Activity.model';
import { MontecarloBody } from './models/Montecarlo.model';

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
        numberOfSimulations: new FormControl(1, [Validators.required, Validators.min(1), Validators.max(1000000)])
    });

    checkIfValid = (tagId: string, form: AbstractControl) => {
        const element = document.getElementById(tagId);

        if (form.valid) {
            element!.classList.remove('is-invalid');
            element!.classList.add('is-valid');
        } else {
            element!.classList.remove('is-valid');
            element!.classList.add('is-invalid');
        }
    }

    submitAll = () => {
        const body = new MontecarloBody();
        body.numberOfSimulations = this.simulationForm.value['numberOfSimulations'];
        body.generatorType = this.generatorType;

        body.generatorType = (this.generatorType === 'native-generator') ? null : this.generatorForm.value; 
        body.activities = [
            new ActivityModel(this.A1.name, this.A1.distributionForm.value),
            new ActivityModel(this.A2.name, this.A2.distributionForm.value),
            new ActivityModel(this.A3.name, this.A3.distributionForm.value),
            new ActivityModel(this.A4.name, this.A4.distributionForm.value),
            new ActivityModel(this.A5.name, this.A5.distributionForm.value),
        ];
        
        this.componentService.setSimulation(body)
            .subscribe(data => {
                console.log(data);
            });
    };
}