import { Component, OnInit } from '@angular/core';
import { StudentDataService } from '../student-data.service';

@Component({
  selector: 'student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  public student = ['Nate Murray', 'Carlos Taborda', 'Felipe Coury'];

  public stuName = "Ari Lerner"
  public message;
  public urlData ;
  

  serviceData() {
    const url = "http://www.mocky.io/v2/5d49831f3200005300600d47";
    this.urlData = this.httpServiceData.getData(url);
    console.log(this.urlData);
  }

  constructor( private httpServiceData: StudentDataService) {    
  }

  ngOnInit() {
  }

}