import { Component, OnInit } from '@angular/core';

import { Station } from 'src/app/modules/station';
import { StationService } from 'src/app/services/station.service';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent implements OnInit {
  constructor(private stationService: StationService) { }


  ngOnInit(): void {
    this.getStations();

  }



  getStations(): void {

    this.stationService.getStations().subscribe(stations => this.stations = stations)

  }
  stations?: Station[];
  filterBy = '';
}
