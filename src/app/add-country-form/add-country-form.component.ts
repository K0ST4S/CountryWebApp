import { Component, OnInit, ViewChild, ViewChildDecorator } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpService } from './../services/http.service';
import { UtilService } from './../services/util.service';

@Component({
  selector: 'app-add-country-form',
  templateUrl: './add-country-form.component.html',
  styleUrls: ['./add-country-form.component.scss']
})
export class AddCountryFormComponent implements OnInit {

  @ViewChild('newCountryForm') newCountryForm: NgForm;
  propertyTypes: Array<string> = ['One', 'Two'];
  constructor(public _http: HttpService,
    private utilService: UtilService) { }

  ngOnInit(): void {
  }

  onCountrySubmit(data) : void {
    console.log(data);
    this._http.addCountry(data);
  }
}
