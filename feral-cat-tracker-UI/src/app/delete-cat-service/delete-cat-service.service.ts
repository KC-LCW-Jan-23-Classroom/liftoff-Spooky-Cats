import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cat } from '../models/cat';

@Injectable({
  providedIn: 'root'
})
export class DeleteCatServiceService {

  private deleteApiUrl = 'http://localhost:8080/delete';


  constructor(private http: HttpClient) { }

  deleteCatByMicrochipNumber(microchipNumber: string): Observable<any> {
    console.log('')
    return   this.http.post(this.deleteApiUrl, microchipNumber, {
      reportProgress: true,
      responseType: 'text',
      withCredentials: true 
    });
  }
}
