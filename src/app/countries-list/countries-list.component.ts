import { Component, OnInit } from '@angular/core';
import { Country } from '../country';
import { HttpService } from './../services/http.service';
import { UtilService } from './../services/util.service';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnInit {

  countries: Array<any>;
  error: string;
  sortFields: Array<string> = [
    "name",
    "population"
  ];
  sortField: string = 'Population';
  sortDirection: string = 'asc';
  p: number = 1;
  constructor(private _http: HttpService,
    private utilService: UtilService) { }

  ngOnInit() {
    this._http.getCountries().subscribe(data => {
      this.countries = data;
    });

    this._http.addCountryEvent.subscribe(data => {
      this.countries = [data, ...this.countries];
    });

    this._http.countryDeleteEvent.subscribe(data => {
      this.deleteCountry(data);
    });
  }

  deleteCountry(country: Country) {
    const index: number = this.countries.indexOf(country);
    if (index !== -1) {
        this.countries.splice(index, 1);
    }        
  }
}

