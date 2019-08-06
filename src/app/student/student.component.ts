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
  public urlData = [];

  serviceData() {
    console.log("serviceData clickk in student component");
    // this.urlData = this.httpServiceData.getData(urlData);
  }

  constructor( private httpServiceData: StudentDataService) {    
  }

  ngOnInit() {
  }

}