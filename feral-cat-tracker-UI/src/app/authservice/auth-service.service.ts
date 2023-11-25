import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  
  authenticated = false;
  username: string;
  constructor(private http: HttpClient) {}
  message: string;
  login(data: any): Observable<any> {
   
   let response = this.http.post(`http://localhost:8080/login`, data, { withCredentials: true, observe: 'response' });
    console.log('login');

    return response
    .pipe(
      tap(response => console.log('Login response:', response)),
      map((response: any) => {
        
        if (response.ok) {
          this.authenticated = true;
          this.message = response.body.message;
          this.username = response.body.username;
          console.log(this.username)
        } else {
          this.authenticated = false;
          this.username = undefined;
          this.message = response.body.message;
        }
        (console.log("Authenticate = " + this.authenticated))
        return response; 
      })
    );
  }

  logout(): Observable<any> {
    return this.http.get(`http://localhost:8080/logout`, { withCredentials: true });
  }

  register(data: any): Observable<any> {

    let response = this.http.post(`http://localhost:8080/register`, data, { withCredentials: true, observe: 'response' });
     
    console.log('reg2');
    return response
    .pipe(
      tap(response => console.log('Register response:', response)),
      map((response: any) => {
        
        
        if (response.ok) {
          this.message = response.body.message;
          this.username = response.body.username;
        } else {
          this.authenticated = false;
          this.message = response.body.message;
        }
        (console.log("Authenticate = " + this.authenticated))
        return response; 
      })
    );
  }
}
function pipe(arg0: any) {
  throw new Error('Function not implemented.');
}

