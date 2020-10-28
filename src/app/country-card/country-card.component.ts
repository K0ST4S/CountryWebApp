import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Country } from './../country'

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss']
})
export class CountryCardComponent implements OnInit {
  @Input('country') country: Country;
  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    
  }

  onUpdateDetailsPage() : void {
    console.log('onUpdateDetailsPage');
    this._http.updateDetailsPage(this.country);
  }
}
