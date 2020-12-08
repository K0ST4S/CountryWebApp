import { Component, OnInit } from '@angular/core';
import { ICountry } from '../ICountry';
import { HttpService } from './../services/http.service';
import { UtilService } from './../services/util.service';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnInit {

  countries: Array<ICountry>;
  error: string;
  sortFields: Array<string> = [
    "name",
    "population"
  ];
  sortField: string = 'Population';
  sortDirection: string = 'asc';
  p: number = 1;
  constructor(private _http: HttpService) { }

  ngOnInit() {
    // get REST API countries data
    this._http.getCountries().subscribe(data => {
      this.countries = data;
    });

    // add the country to the start of the list
    this._http.addCountryEvent.subscribe(data => {
      this.countries = [data, ...this.countries];
    });

    //
    this._http.countryDeleteEvent.subscribe(data => {
      this.deleteCountry(data);
    });
  }

  // delete the specifed country
  deleteCountry(country: ICountry) {
    const index: number = this.countries.indexOf(country);
    if (index !== -1) {
        this.countries.splice(index, 1);
    }     
  }
}

