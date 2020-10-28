import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { Subject  } from 'rxjs';
import { Country } from '../country';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public newCountrySubject = new Subject<any>();
  public countryDetailsSubject = new ReplaySubject<Country>(undefined);
  constructor(private http: HttpClient) { }

  getCountries() : Observable<any>
  {
    return this.http.get<any>('https://restcountries.eu/rest/v2/all');
  }

  addCountry(data:any)
  {
    this.newCountrySubject.next(data)
  }

  updateDetailsPage(data: Country)
  {
    console.log("updateDetailsPage");
    this.countryDetailsSubject.next(data);
  }
}