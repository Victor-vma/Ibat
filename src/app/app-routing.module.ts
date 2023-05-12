import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StationDetailsComponent } from './components/station-details/station-details.component';
import { StationsComponent } from './components/stations/stations.component';

const routes: Routes = [
  { path: 'detail/:number', component: StationDetailsComponent },
  { path: 'stations', component: StationsComponent },
  { path: '', redirectTo: '/stations', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
