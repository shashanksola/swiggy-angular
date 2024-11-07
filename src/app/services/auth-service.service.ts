import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../components/signin/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://mockapi.io/your-endpoint'; // Replace with your actual API URL

  constructor(public http: HttpClient) { }

  // Register a new user
  register(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  // Login an existing user
  login(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, user);
  }
}
