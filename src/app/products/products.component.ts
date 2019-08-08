import { Component, OnInit } from '@angular/core';
import { StudentDataService } from '../student-data.service';
import { Product } from '../product';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products: Product[];
  constructor(private _productService: StudentDataService) { }

  ngOnInit() {
    const myObservable = this._productService.getProducts();
    myObservable.subscribe( (productsData: Product[]) => this.products = productsData);
    console.log("observables are working");
    console.log(this.products);
  }

}