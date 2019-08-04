import { Injectable } from '@angular/core';

@Injectable()
export class StudentDataService {

  getStudents(){
        return [
      {
        "id": 1,
        "name": "Nate Murray",
        "age": 24,
        "specialization": "Physics"
      },
      {
        "id": 2,
        "name": "Carlos Taborda",
        "age": 27,
        "specialization": "Maths"

      },
      {
        "id": 3,
        "name": "Felipe Coury",
        "age": 25,
        "specialization": "Science"
      }
    ]
  }

  constructor() { }

}