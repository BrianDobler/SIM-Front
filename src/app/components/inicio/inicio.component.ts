import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  Titulo = 'Trabajos Prácticos Simulación 2021 UTN - FRC Ingeniería en Sistemas de Información'
  constructor() { }

  ngOnInit(): void {
  }

}
