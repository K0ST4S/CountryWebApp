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
  public addCountryEvent = new Subject<any>();
  public updateDetailsPageEvent = new ReplaySubject<Country>(undefined);
  constructor(private http: HttpClient) { }

  getCountries() : Observable<any>
  {
    return this.http.get<any>('https://restcountries.eu/rest/v2/all');
  }

  invokeAddCountry(data:any)
  {
    this.addCountryEvent.next(data)
  }

  invokeUpdateDetailsPage(data: Country)
  {
    console.log("updateDetailsPage");
    this.updateDetailsPageEvent.next(data);
  }

  invokeCountryDelete(data: Country)
  {
      this.countryDeleteEvent.next(data);
  }
}