import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private http: HttpClient) {}

  login(data: any): Observable<any> {
    console.log('login');
    return this.http.post(`http://localhost:8080/login`, data);
  }

  register(data: any): Observable<any> {
    console.log('reg2');
    return this.http.post(`http://localhost:8080/register`, data);
  }
}
