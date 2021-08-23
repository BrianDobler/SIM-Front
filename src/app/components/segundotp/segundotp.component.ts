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
    
    var reader = new FileReader();
    reader.readAsText(this.selectedFile, "UTF-8");
    reader.onload = e => {
      const result = reader.result;
      const lines = result.split('\n');

      const table = <HTMLTableElement> document.getElementById("randomTable");

      // all.forEach((element: string) => {
      //   let row = table.insertRow();
      //   let value = row.insertCell(1);
  
      //   value.innerHTML = element;
      // });
    } 
  }

  onUpload() {
    const fd = new FormData();
    fd.append(
      'file', 
      this.selectedFile, 
      this.selectedFile.name
      )
    console.log(fd)
    this.http.post('http://localhost:5000/api/submitRandomSequence', fd)
    .subscribe(res => {
      console.log(res);
    })
  }
}
