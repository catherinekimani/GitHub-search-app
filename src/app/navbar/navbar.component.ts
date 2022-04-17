import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [ApiService]
})
export class NavbarComponent implements OnInit {
public userName : string
  constructor() { 
    this.userName = "catherinekimani"
  }
  searchUser() {
    
  }
  ngOnInit(): void {
  }

}
