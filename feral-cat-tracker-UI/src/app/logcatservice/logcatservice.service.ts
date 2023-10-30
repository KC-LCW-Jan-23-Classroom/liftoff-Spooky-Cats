import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogcatserviceService {

  constructor(private http:HttpClient) { }

  log(data: any): Observable<any>{
    return this.http.post('http://localhost:8080/log', data, {responseType: 'text'})
  }
}