import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cat } from '../models/cat';

@Injectable({
  providedIn: 'root'
})
export class FindcatserviceService {

  constructor(private http: HttpClient) {}

  find(): Observable<Cat[]> {
    console.log('Find All Cats');
    return this.http.get<Cat[]>(`http://localhost:8080/find`);
  }
}
