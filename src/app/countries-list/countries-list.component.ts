import { Component, OnInit } from '@angular/core';
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
  constructor(private _http: HttpService,
    private utilService: UtilService) { }

  ngOnInit() {
    this._http.getCountries().subscribe(data => {
      console.log(data);
      this.countries = data;
    });

    this._http.newCountrySubject.subscribe(data => {
      this.countries = [data, ...this.countries];
    });
  }
}

