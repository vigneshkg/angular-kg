import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component'
import {ProductsComponent} from './products/products.component'


@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'products', component: ProductsComponent },
      { path: '**', redirectTo: 'login' }
    ])
  ],
  declarations: [ ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }