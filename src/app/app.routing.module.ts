import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component'
import {ProductsComponent} from './products/products.component'
import {UsersComponent} from './users/users.component'
import { StudentComponent } from './student/student.component'

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'login', component: LoginComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'users', component: UsersComponent },
      { path: 'student', component: StudentComponent },
      { path: '**', redirectTo: 'login' }
    ])
  ],
  declarations: [ ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }