import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  providers: [ApiService]
})
export class NavbarComponent implements OnInit {
  
  constructor(private apiService:ApiService) { 
  }
  
  ngOnInit(): void {
  }

}
