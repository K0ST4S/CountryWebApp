import { Component, OnInit } from '@angular/core';
import { Country } from '../country';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {

  country: Country;
  constructor(private _http: HttpService) 
  { 
    console.log("constr");
  }

  ngOnInit(): void {
    console.log("on init");
    this._http.countryDetailsSubject.subscribe(data => {
      console.log("Updating data to:");
      console.log(data);
      this.country = data;
    });
  }
}
