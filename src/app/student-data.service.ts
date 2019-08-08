import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable()
export class StudentDataService {

  getStudents(){
      return [  {
        "id": 1,
        "name": "Nate Murray",
        "age": 24,
        "specialization": "Physics"
      } ]
  }
  public urlData;
  constructor( private httpSerVar: HttpClient) { }
  ngOnInit() {
  }

  getData(url) {
    return this.httpSerVar.get( url ).subscribe((data) => this.getData(data))
    // console.log(this.getData(data));
  }

  products: Product[] = [ { 
      "id": 1,
      "name": "Shoe",
      "description": "Nam dignissim erat vitae"
    },
    {
      "id": 2,
      "name": "Mobile-Z",
      "description": "Vestibulum quis massa tellus"
    }
  ]

  getProducts() {
    const myObservable = new Observable( (observer) => {
      setTimeout(() => {
        observer.next(this.products);
      }, 1000);
    } );
    return myObservable;
  }

}