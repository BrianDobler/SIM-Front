import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-tercertp',
  templateUrl: './tercertp.component.html',
  styleUrls: ['./tercertp.component.css']
})
export class TercertpComponent implements OnInit {

  tiposDistribuciones: string = '';
  baseUrl = 'http://localhost:8080/api/';
  url = '?numberOfSamples=';

  constructor(
    private http: HttpClient,
    private formBuilder: FormBuilder
    ) {}

  ngOnInit(): void {
  }

  seleccion(value: string) {
    this.tiposDistribuciones = value;
  }

  uniformDistributionForm = this.formBuilder.group({
    a: "",
    b: "",
    numberOfSamples: "",
    numberOfIntervals: ""
  })

  exponentialDistributionForm = this.formBuilder.group({
    lambda: "",
    numberOfSamples: "",
    numberOfIntervals: ""
  })
  
  poissonDistributionForm = this.formBuilder.group({
    lambda: "",
    numberOfSamples: "",
    numberOfIntervals: ""
  })

  normalDistributionForm = this.formBuilder.group({
    mu: "",
    sigma: "",
    numberOfSamples: "",
    numberOfIntervals: ""
  })
  
  onSubmit(): void {
    switch (this.tiposDistribuciones) {
      case 'normal-distribution':

        console.log(this.normalDistributionForm.value);
        this.url = 
        'normal-distribution' + this.url + 
        this.normalDistributionForm.value['numberOfSamples'] + 
        '&mu=' + this.normalDistributionForm.value['mu'] +
        '&sigma=' + this.normalDistributionForm.value['sigma'] +
        '&numberOfIntervals=' + this.normalDistributionForm.value['numberOfIntervals'];
        
        break;
      
      case 'exponential-distribution':
        console.log(this.exponentialDistributionForm.value);

        this.url = 
        'exponential-distribution' + this.url + 
        this.exponentialDistributionForm.value['numberOfSamples'] +
        '&lambda=' + this.exponentialDistributionForm.value['lambda'] +
        '&numberOfIntervals=' + this.normalDistributionForm.value['numberOfIntervals'];

        break;

      case 'poisson-distribution':
        console.log(this.poissonDistributionForm.value);

        this.url = 
        'poisson-distribution' + this.url +
        this.poissonDistributionForm.value['numberOfSamples'] +
        '&lambda=' + this.poissonDistributionForm.value['lambda'] +
        '&numberOfIntervals=' + this.normalDistributionForm.value['numberOfIntervals'];

        break;
      
      case 'uniform-distribution':
        console.log(this.uniformDistributionForm.value);

        this.url = 
        'uniform-distribution' + this.url +
        this.uniformDistributionForm.value['numberOfSamples'] +
        '&a=' + this.uniformDistributionForm.value['a'] +
        '&b=' + this.uniformDistributionForm.value['b'] +
        '&numberOfIntervals=' + this.normalDistributionForm.value['numberOfIntervals'];
        break;
    }

    this.request();
    this.url = ''
  }

  requestData: any;
  request(): void {
    console.log(this.baseUrl + this.url)
    this.http.get(this.baseUrl + this.url)
      .subscribe(data => {
        this.requestData = data;
      })
  }
}

