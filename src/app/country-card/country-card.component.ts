import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../services/http.service';
import { ICountry } from './../ICountry'

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss']
})
export class CountryCardComponent implements OnInit {
  @Input('country') country: ICountry;
  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    
  }

  onUpdateDetailsPage() : void {
    this._http.invokeUpdateDetailsPage(this.country);
  }

  deleteCountry() {
    this._http.invokeCountryDelete(this.country);
  }        
}
