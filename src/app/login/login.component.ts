import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup( {
  userName: new FormControl(''),
  password: new FormControl(''),

    } )

  submitData(event) {
    window.alert("Welcome " + event + " !");
  }
  constructor() { }

  ngOnInit() {
  }

}