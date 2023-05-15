import { Pipe, PipeTransform } from '@angular/core';
import { Station } from '../modules/station';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Station[], filterBy: string, name: string): any {
    if (value.length === 0 || !filterBy) {
      return value;
    }
    let filteredStations: Station[] = [];
    for (let station of value) {
      if (station.name.toLowerCase().includes(filterBy.toLowerCase())) {
        filteredStations.push(station);
      }

    }
    return filteredStations;
  }


}
