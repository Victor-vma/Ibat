import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, Input, OnChanges, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from 'src/app/modules/location';
import { Station } from 'src/app/modules/station';
// import { LocationService } from 'src/app/services/location.service';
import { StationService } from 'src/app/services/station.service';

@Component({
  selector: 'app-station-details',
  templateUrl: './station-details.component.html',
  styleUrls: ['./station-details.component.css']
})
export class StationDetailsComponent implements OnInit {

  @Input() station?: Station;
  @Input() location?: Location;
  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private stationService: StationService,
    // private locationService: LocationService
  ) { }
  ngOnInit(): void {
    this.getStation();

  }
  getStation(): void {
    const number = Number(this.route.snapshot.paramMap.get('number'));

    this.stationService.getStation(number).subscribe(station => this.station = station);


    console.log(this.station?.position.lat)
  }



  getWeather(): void {

    const lat = (this.station?.position?.lat as number);
    const lng = (this.station?.position?.lng as number);
    const apiKey: string = '752aedbb47946a307332c23563028c32';
    const endpointUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}`;
    this.http.get<Location>(endpointUrl).subscribe(location => this.location = location)


    console.log(this.location?.coord.lat)
    this.renderWeatherData();
  }




  //  getWeather(lat: number, lng: number):  {
  //     const apiKey: string = '752aedbb47946a307332c23563028c32';
  //     const endpointUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}`;
  //     return this.http.get<Location>(endpointUrl).
  //   }
  // const lat = (this.station?.position?.lat as number);
  // const lng = (this.station?.position?.lng as number);
  // this.locationService.getWeather(lat, lng).subscribe(location => location = location);
  // console.log(lat)
  // console.log(lng)
  // // this.renderWeaderData();
  // }
  renderWeatherData(): void {
    console.log(this.location?.base)

  }
}
