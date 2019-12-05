import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentDataService } from './student-data.service';
import { ProductsComponent } from './products/products.component';
import { LoginComponent } from './login/login.component';
import {AppRoutingModule} from './app.routing.module';
import { UsersComponent } from './users/users.component';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule ],

  declarations: [ AppComponent, StudentComponent, StudentDetailsComponent, ProductsComponent, LoginComponent, UsersComponent, HighlightDirective ],
  bootstrap:    [ AppComponent ],
  providers: [StudentDataService]
})
export class AppModule { }
