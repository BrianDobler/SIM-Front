import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Chart } from 'chart.js';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-tercertp',
    templateUrl: './tercertp.component.html',
    styleUrls: ['./tercertp.component.css']
})

export class TercertpComponent implements OnInit {
    tiposDistribuciones = '';
    baseUrl = environment.url;
    url = '?numberOfSamples=';

    constructor(
        private http: HttpClient,
        private formBuilder: FormBuilder
    ) { }

    ngOnInit(): void { ; }

    generateGraphic(): void {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const myChart = new Chart('myChart', {
            type: 'bar',
            data: {
                labels: this.classMarks,
                datasets: [{
                    label: 'Frecuencias observadas.',
                    data: this.observedFrequencies,
                    borderWidth: 1
                }]
            }
        });
    }

    seleccion(value: string): void {
        this.tiposDistribuciones = value;
    }

    uniformDistributionForm = this.formBuilder.group({
        a: '',
        b: '',
        numberOfSamples: '',
        numberOfIntervals: ''
    })

    exponentialDistributionForm = this.formBuilder.group({
        lambda: '',
        numberOfSamples: '',
        numberOfIntervals: ''
    })

    poissonDistributionForm = this.formBuilder.group({
        lambda: '',
        numberOfSamples: '',
        numberOfIntervals: ''
    })

    normalDistributionForm = this.formBuilder.group({
        mu: '',
        sigma: '',
        numberOfSamples: '',
        numberOfIntervals: ''
    })

    onSubmit(): void {
        switch (this.tiposDistribuciones) {
        case 'normal-distribution':
            this.url =
            'normal-distribution' + this.url +
            this.normalDistributionForm.value['numberOfSamples'] +
            '&mu=' + this.normalDistributionForm.value['mu'] +
            '&sigma=' + this.normalDistributionForm.value['sigma'] +
            '&numberOfIntervals=' + this.normalDistributionForm.value['numberOfIntervals'];
            
            break;

        case 'exponential-distribution':
            this.url =
            'exponential-distribution' + this.url +
            this.exponentialDistributionForm.value['numberOfSamples'] +
            '&lambda=' + this.exponentialDistributionForm.value['lambda'] +
            '&numberOfIntervals=' + this.exponentialDistributionForm.value['numberOfIntervals'];

            break;

        case 'poisson-distribution':
            this.url =
            'poisson-distribution' + this.url +
            this.poissonDistributionForm.value['numberOfSamples'] +
            '&lambda=' + this.poissonDistributionForm.value['lambda'];

            break;

        case 'uniform-distribution':
            this.url =
            'uniform-distribution' + this.url +
            this.uniformDistributionForm.value['numberOfSamples'] +
            '&a=' + this.uniformDistributionForm.value['a'] +
            '&b=' + this.uniformDistributionForm.value['b'] +
            '&numberOfIntervals=' + this.uniformDistributionForm.value['numberOfIntervals'];
            
            break;
        }

        this.request();
    }

    requestData: any;
    generatedSeries: any;
    observedFrequencies: any;
    classMarks: any;
    criticalChiValue: any;
    calculatedChiValue: any;
    rejected: any;

    request(): void {
        this.http.get(this.baseUrl + this.url)
            .subscribe(data => {
                this.requestData = data;
                this.generatedSeries = this.requestData['series'];
                this.observedFrequencies = this.requestData['frequencies'];
                this.classMarks = this.requestData['classMarks'];
                this.calculatedChiValue = this.requestData['calculatedChiValue'];
                this.criticalChiValue = this.requestData['criticalValue'];
                this.rejected = this.requestData['rejected'];
            });
    }
}
