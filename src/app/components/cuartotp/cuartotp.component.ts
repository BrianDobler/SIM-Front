import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ComponentService } from './cuartotp.service';
import { Activity } from './helpers/Activity';
import { ActivityModel } from './models/Activity.model';
import { MontecarloBody } from './models/Montecarlo.model';
import { Chart } from 'chart.js';

@Component({
    selector: 'app-cuartotp',
    templateUrl: './cuartotp.component.html',
    styleUrls: ['./cuartotp.component.css'],
})

export class CuartotpComponent implements OnInit {
    // Atributes. This comment is for organisation.
    montecarloRows: any [];
    maxDuration: number = 0;
    minDuration: number = 0;
    mean: number = 0;
    probFinishedLess45days: number = 0;
    deviation: number = 0;
    variance: number = 0;
    dateNC90: number = 0;

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
        seed: new FormControl(489785354 ,[Validators.required, Validators.min(0)]),
        mod: new FormControl(3578942135498 ,[Validators.required, Validators.min(0)]),
        a: new FormControl(1234512354 ,[Validators.required, Validators.min(0)]),
        c: new FormControl(1597563687 ,[Validators.required, Validators.min(0)])
    });

    simulationForm: FormGroup = new FormGroup({
        numberOfSimulations: new FormControl(1, [Validators.required, Validators.min(1), Validators.max(1000000)]),
        from: new FormControl('', [Validators.min(1), Validators.max(999999)]),
        to: new FormControl('', [Validators.min(1), Validators.max(1000000)])
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
        body.from = this.simulationForm.value['from'];
        body.to = this.simulationForm.value['to'];
        body.generatorType = this.generatorType;

        body.generatorType = (this.generatorType === 'native-generator') ? null : this.generatorForm.value;
        body.activities = [
            new ActivityModel(this.A1.name, this.A1.distributionType, this.A1.distributionForm.value),
            new ActivityModel(this.A2.name, this.A2.distributionType, this.A2.distributionForm.value),
            new ActivityModel(this.A3.name, this.A3.distributionType, this.A3.distributionForm.value),
            new ActivityModel(this.A4.name, this.A4.distributionType, this.A4.distributionForm.value),
            new ActivityModel(this.A5.name, this.A5.distributionType, this.A5.distributionForm.value),
        ];

        this.componentService.setSimulation(body)
            .subscribe(data => {
                // Get the generated simulations.
                this.montecarloRows = data.activities;

                // Get the min and max value
                this.minDuration = data.minValue;
                this.maxDuration = data.maxValue;
                this.mean = data.mean;
                this.probFinishedLess45days = data.probFinishedLess45days;
                this.variance = data.variance;
                this.deviation = data.deviation;
                this.dateNC90 = data.dateNC90;

                // Generate labels and dataset from the temporary array.
                const labels = data.activities.map( (obj: any) => obj.day );
                const dataset = data.activities.map( (obj: any) => obj.mean );
                // Generate the graphic.
                this.generateGraphic(dataset, labels);
            });
    };

    generateGraphic(dataset: number[], labels: number[]): void {
        const myChart = new Chart('myChart', {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Duración media en días de la tarea de ensamble',
                    borderColor: 'rgb(255, 99, 132)',
                    data: dataset,
                }]
            }
        });
    }
}