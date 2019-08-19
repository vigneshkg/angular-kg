import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
   { path: '', component: OrdersComponent },
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
export class OrdersRoutingModule { }