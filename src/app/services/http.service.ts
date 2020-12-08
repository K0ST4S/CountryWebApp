import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { Subject } from 'rxjs';
import { ICountry } from '../ICountry';
import { NgxSpeechToTextService } from 'ngx-speech-to-text';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public countryDeleteEvent = new Subject<ICountry>();
  public addCountryEvent = new Subject<ICountry>();
  public selectedCountry: ICountry;
  constructor(private speechRecognitionService: NgxSpeechToTextService,
    private http: HttpClient) {
    this.speechRecognitionService.init();
    this.speechRecognitionService.start();
  }

  ngOnInit() {

  }

  // downloads countries data
  getCountries(): Observable<ICountry[]> {
    return this.http.get<ICountry[]>('https://restcountries.eu/rest/v2/all');
  }

  // invokes addCountryEvent
  invokeAddCountry(data: any) {
    this.addCountryEvent.next(data as ICountry)
  }

  // updates details page
  invokeUpdateDetailsPage(data: ICountry) {
    this.selectedCountry = data;
  }

  // delete country callback
  invokeCountryDelete(data: ICountry) {
    this.countryDeleteEvent.next(data);
  }
}