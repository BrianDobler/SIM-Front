import { HttpClient } from '@angular/common/http';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundotp',
  templateUrl: './segundotp.component.html',
  styleUrls: ['./segundotp.component.css']
})
export class SegundotpComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
  }

  taxis() {
    console.log("taxis")
  }
 
  france() {
    console.log("france")
  }
}
