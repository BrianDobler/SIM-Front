import { HttpClient } from '@angular/common/http';
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
  
  selectedFile: any = null;

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

  taxis() {
    console.log("taxis")
  }
 
  france() {
    console.log("france")
  }
}
