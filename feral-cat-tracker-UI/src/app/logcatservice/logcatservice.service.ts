import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogcatserviceService {

  constructor(private http:HttpClient) { }

  log(data: any, file: File): Observable<any>{
    const formData: FormData = new FormData();
      formData.append('cat', data);
      formData.append('file', file);
    
    return this.http.post('http://localhost:8080/log', formData, {
      reportProgress: true,
      responseType: 'text',
      withCredentials: true 
    });
  }
  update(data: any, file: File): Observable<any>{
    const formData: FormData = new FormData();
      formData.append('cat', data);
      formData.append('file', file);
    
    return this.http.post('http://localhost:8080/update', formData, {
      reportProgress: true,
      responseType: 'text',
      withCredentials: true 
    });
  }

}


