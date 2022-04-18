import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public repo:any = []
  public user: any = [];
  public userName: string = "";
  constructor(private apiService: ApiService) { 
    this.apiService.getUserInfo().subscribe((response: any) => {
      this.user = response;
      console.log(response);
    })
    this.apiService.getRepo().subscribe((response: any) => {
      this.repo = response;
    })
  }
searchUser() {
  this.apiService.getUsername(this.userName)
  this.apiService.getUserInfo().subscribe((response: any) => {
      this.user = response;
      console.log(response);
  })
  this.apiService.getRepo().subscribe((response: any) => {
      this.repo = response;
    })
  }
  ngOnInit(): void {
  }

}
