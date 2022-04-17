import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  
  // user datails
  getRepos() {
    return this.http.get("https://api.github.com/users/catherinekimani/repos")
  }
}
