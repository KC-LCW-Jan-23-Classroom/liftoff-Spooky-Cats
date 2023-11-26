import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GeocoderResponse } from './geocoder-response';

@Injectable({
  providedIn: 'root'
})
export class Googleservice {
    constructor(private http: HttpClient) {}

    getLocation(term: string): Observable<GeocoderResponse> {
        const url = `https://maps.google.com/maps/api/geocode/json?address=${term}&sensor=false&key=AIzaSyARfQMAL7vYMlYl9RNoG0FJPcDPzqJhnlA`;
        return this.http.get<GeocoderResponse>(url);
      }

}
