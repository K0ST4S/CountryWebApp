import { Component, OnInit } from '@angular/core';
import { ICountry } from '../ICountry';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {

  country: ICountry;
  constructor(private _http: HttpService) 
  { 
  }

  ngOnInit(): void {
    this._http.updateDetailsPageEvent.subscribe(data => {
      this.country = data;
    });
  }
}
