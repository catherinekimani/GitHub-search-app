import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private userName: string;

  constructor(private http: HttpClient) { 
    console.log("service")
    this.userName = "catherinekimani"
  }
  // userinfo
  getUserInfo() {
    return this.http.get("https://api.github.com/users/" + this.userName).pipe(map(data => {
      return data;
    }))
  }
}
