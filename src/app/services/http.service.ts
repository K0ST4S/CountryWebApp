import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { Subject  } from 'rxjs';
import { Country } from '../country';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public countryDeleteEvent = new Subject<Country>();
  public addCountryEvent = new Subject<Country>();
  public updateDetailsPageEvent = new ReplaySubject<Country>(undefined);
  constructor(private http: HttpClient) { }

  getCountries() : Observable<Country[]>
  {
    return this.http.get<Country[]>('https://restcountries.eu/rest/v2/all');
  }

  invokeAddCountry(data:any)
  {
    this.addCountryEvent.next(data as Country)
  }

  invokeUpdateDetailsPage(data: Country)
  {
    this.updateDetailsPageEvent.next(data);
  }

  invokeCountryDelete(data: Country)
  {
      this.countryDeleteEvent.next(data);
  }
}