import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { StudentDataService } from '../student-data.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  @Input() public parentData;
  @Output() public childEvent = new EventEmitter();

  studentDetails() {
    // this.students = this._studentsData.getStudents();
    // console.log(this.students);
  }
  fireEvent() {
    this.childEvent.emit("Data sent from Child to Parent");
  }

  constructor(private _studentsData: StudentDataService) { }
  public students = [];

  ngOnInit() {
    // this.students = this._studentsData.getStudents();
  }

}