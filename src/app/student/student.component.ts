import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  public student = ['Nate Murray', 'Carlos Taborda', 'Felipe Coury'];

  public stuName = "Ari Lerner"
  public message;

  constructor() { }

  ngOnInit() {
  }

}