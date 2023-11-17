import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  
  authenticated = false;
  username: string | undefined;
  constructor(private http: HttpClient) {}

  login(data: any): Observable<any> {
   
   let response = this.http.post(`http://localhost:8080/login`, data, { withCredentials: true });
    console.log('login');
 

    return response
    .pipe(
      tap(response => console.log('Register response:', response)),
      map((response: any) => {
        (console.log("Response = " + response.message))
        
        if (response.message == "User successfully logged in.") {
          this.authenticated = true;
          this.username = response.username;
          console.log(this.username)
        } else {
          this.authenticated = false;
          this.username = undefined;
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

    let response = this.http.post(`http://localhost:8080/register`, data, { withCredentials: true });
     
    console.log('reg2');
    return response
    .pipe(
      tap(response => console.log('Register response:', response)),
      map((response: any) => {
        (console.log("Response = " + response.message))
        
        if (response.message == "Given user details are successfully registered") {
          this.authenticated = true;
        } else {
          this.authenticated = false;
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

