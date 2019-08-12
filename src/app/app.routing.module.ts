import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component'
import {ProductsComponent} from './products/products.component'
import {UsersComponent} from './users/users.component'
import { StudentComponent } from './student/student.component'

const routes: Routes = [
   { path: 'login', component: LoginComponent },
   { path: 'products', component: ProductsComponent },
   { path: 'users', component: UsersComponent },
   { path: 'student', component: StudentComponent },
   { path: '**', redirectTo: '' },
  //  { path: 'customers', 
  //  loadChildren(): => import('./customers/customers.module').then(mod => mod.CustomersModule) },
  //  { path: 'orders', 
  //  loadChildren(): => import('./orders/orders.module').then( mod => mod.OrdersModule) }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [ ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }