import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'GitHub-serch-app';

  constructor(private apiService:ApiService) {
    
  }
  ngOnInit(): void {
    this.apiService.getRepos().subscribe((Repos) => 
      console.log(Repos)
    );
  }
}
