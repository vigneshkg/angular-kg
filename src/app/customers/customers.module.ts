import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers/customers.component';
import { CustomersRoutingModule } from './customers.routing.module';

@NgModule({
  imports: [
    CommonModule, CustomersRoutingModule
  ],
  declarations: [CustomersComponent]
})
export class CustomersModule { }