import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from '../modules/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  // getWeather(lat: number, lng: number): Observable<Location> {
  //   const apiKey: string = '752aedbb47946a307332c23563028c32';
  //   const endpointUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}`;
  //   return this.http.get<Location>(endpointUrl).pipe();
  // }
}
