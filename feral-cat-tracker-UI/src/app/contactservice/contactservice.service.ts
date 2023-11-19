import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactserviceService {

  constructor(private http:HttpClient) { }
  
  contact(data: any): Observable<any>{
    return this.http.post('http://localhost:8080/contact', data, { withCredentials: true, responseType: 'text'})
  }
}
