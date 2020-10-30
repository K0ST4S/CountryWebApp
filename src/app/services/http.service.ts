import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { Subject  } from 'rxjs';
import { ICountry } from '../ICountry';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public countryDeleteEvent = new Subject<ICountry>();
  public addCountryEvent = new Subject<ICountry>();
  public updateDetailsPageEvent = new ReplaySubject<ICountry>(undefined);
  constructor(private http: HttpClient) { }

  getCountries() : Observable<ICountry[]>
  {
    return this.http.get<ICountry[]>('https://restcountries.eu/rest/v2/all');
  }

  invokeAddCountry(data:any)
  {
    this.addCountryEvent.next(data as ICountry)
  }

  invokeUpdateDetailsPage(data: ICountry)
  {
    this.updateDetailsPageEvent.next(data);
  }

  invokeCountryDelete(data: ICountry)
  {
      this.countryDeleteEvent.next(data);
  }
}