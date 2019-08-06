import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class StudentDataService {

  getStudents(){
    console.log("uuuuu")
        return [
      {
        "id": 1,
        "name": "Nate Murray",
        "age": 24,
        "specialization": "Physics"
      }
    ]
  }
  public urlData;
  constructor( private httpSerVar: HttpClient) { }

  ngOnInit() {
    console.log("1111")
    const url = "http://www.mocky.io/v2/5d49831f3200005300600d47";
    this.httpSerVar.get( url ).subscribe((data) => this.getData(data))
  }

  getData(urlData) {
    this.urlData = urlData;
    console.log(urlData)
  }

}