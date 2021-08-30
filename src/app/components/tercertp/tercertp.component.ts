import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tercertp',
  templateUrl: './tercertp.component.html',
  styleUrls: ['./tercertp.component.css']
})
export class TercertpComponent implements OnInit {

  tiposDistribuciones:string | undefined ;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  seleccion(value:string){
    console.log(value);
    this.tiposDistribuciones = value;

  }

  requestData: any;
  request() {
     this.http.get("http://localhost:8080/api/poisson-distribution?lambda=4&numberOfSamples=500").subscribe(data => {
      this.requestData = data;

      console.log(this.requestData)
    })
  }

  distributions = [
    'Uniforme',
    'Poisson',
    'Normal',
    'Exponencial'
  ]
}
