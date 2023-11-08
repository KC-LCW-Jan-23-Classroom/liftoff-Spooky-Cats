import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cat } from '../models/cat';

@Injectable({
  providedIn: 'root'
})
export class FindcatserviceService {

  private apiUrl = 'http://localhost:8080/results';
  private findByMicrochipURL = 'http://localhost:8080/find-by-microchip-number';

  constructor(private http: HttpClient) {}

  search(query: string): Observable<any> {
    console.log('Searched cat(s)')
    return this.http.get<Cat[]>(`${this.apiUrl}?query=${query}`);
  }

  find(): Observable<Cat[]> {
    console.log('Find All Cats');
    return this.http.get<Cat[]>(`http://localhost:8080/find`);
  }

  findCatByMicrochipNumber(microchipNumber: string): Observable<any> {
    console.log('')
    return this.http.get<Cat[]>(`${this.findByMicrochipURL}?microchipNumber=${microchipNumber}`);
  }

  //todo maybe findcaybyid
}
