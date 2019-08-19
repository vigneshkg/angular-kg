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
   { path: 'customers', loadChildren: './customers/customers.module#CustomersModule' },
   { path: 'orders', loadChildren: './orders/orders.module#OrdersModule' },
   { path: '**', redirectTo: '' }
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