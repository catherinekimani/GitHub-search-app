import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public user: any = [];
  constructor(private apiService: ApiService) { 
    this.apiService.getUserInfo().subscribe((response: any) => {
      this.user = response;
      console.log(response);
      
    })
  }

  ngOnInit(): void {
  }

}
