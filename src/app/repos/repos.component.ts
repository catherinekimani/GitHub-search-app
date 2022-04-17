import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit {
  public repo:any = []
  
  constructor(private apiService: ApiService) { 
    this.apiService.getRepo().subscribe((response: any) => {
      this.repo = response;
      console.log(response);
      
    })
  }

  ngOnInit(): void {
  }
}
