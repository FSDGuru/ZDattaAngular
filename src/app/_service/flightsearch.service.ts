import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Flight } from '../models/flight.model';

@Injectable({
  providedIn: 'root',
})
export class FlightSearchService {
  FlightSearchApi = 'http://35.154.166.215:8581/Search/find/';

  constructor(private Http: HttpClient) { }

  GetFlights(
    departure_location: string,
    arrival_location: string
  ): Observable<Flight[]> {
    return this.Http.get<Flight[]>(
      this.FlightSearchApi + departure_location + '/' + arrival_location
    );
  }
}
