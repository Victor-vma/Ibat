import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Station } from '../modules/station';
import { Location } from '../modules/location';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  constructor(private http: HttpClient) { }


  getStations(): Observable<Station[]> {

    const apiKey: String = 'abf722689b0c21779062e53fbb96c8ecb38b6b88';
    const endpointUrl = `https://api.jcdecaux.com/vls/v1/stations?contract=dublin&apiKey=${apiKey}`;

    return this.http.get<Station[]>(endpointUrl).pipe();
  }

  getStation(number: number): Observable<Station> {

    const apiKey: String = 'abf722689b0c21779062e53fbb96c8ecb38b6b88';
    const endpointUrl = `https://api.jcdecaux.com/vls/v1/stations/${number}?contract=dublin&apiKey=${apiKey}`;

    return this.http.get<Station>(endpointUrl).pipe();


  }


}
