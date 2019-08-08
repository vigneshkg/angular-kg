import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private httpVar: HttpClient) { }
  
  public usersData;
  searchParams = 3;
  ngOnInit() {
    this.httpVar.get("https://jsonplaceholder.typicode.com/users?id=" + this.searchParams).subscribe((data) => this.displayUsers(data))
  }

  displayUsers(usersData) {
    this.usersData = usersData;
    console.log(usersData);
  }

}