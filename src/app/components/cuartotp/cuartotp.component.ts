import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuartotp',
  templateUrl: './cuartotp.component.html',
  styleUrls: ['./cuartotp.component.css']
})
export class CuartotpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  actividades=[{
  Nombre: "Actividad 1",
  Distribucion: "Uniforme",
  Presedencias: "Sin Presedencias", 
  Variable: "T1"},{
  Nombre: "Activdad 2",
  Distribucion: "Uniforme",
  Presedencias: "Sin Presedencias", 
  Variable: "T1"},{
  Nombre: "Actividad 3",
  Distribucion: "Exponencial", 
  Presedencias: "Sin Presedencias",
  Variable: "T1"},{
  Nombre: "Activdad 4",
  Distribucion: "Uniforme", 
  Presedencias: "Solo Actividad 1",
  Variable: "T4"},{
  Nombre: "Actividad 5",
  Distribucion: "Exponencial",
  Presedencias: "Solo Actividad 2 y 4",
  Variable: "T5"},
  ]}
