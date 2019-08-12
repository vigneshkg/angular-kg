import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CustomersComponent } from './customers/customers.component'

const routes: Routes = [
   { path: 'customers', component: CustomersComponent },
   { path: '**', redirectTo: '' }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [ ],
  exports: [RouterModule],
  providers: []
})
export class CustomersRoutingModule { }