import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tercertp',
  templateUrl: './tercertp.component.html',
  styleUrls: ['./tercertp.component.css']
})
export class TercertpComponent implements OnInit {

  tiposDistribuciones:string | undefined ;

  constructor() { }

  ngOnInit(): void {
  }

  seleccion(value:string){
    console.log(value);
    this.tiposDistribuciones = value;

  }

}
