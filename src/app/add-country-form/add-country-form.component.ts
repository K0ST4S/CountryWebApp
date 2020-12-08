import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpService } from './../services/http.service';

@Component({
  selector: 'app-add-country-form',
  templateUrl: './add-country-form.component.html',
  styleUrls: ['./add-country-form.component.scss']
})
export class AddCountryFormComponent implements OnInit {
  nestedForm: FormGroup;

  constructor(public _http: HttpService, private _fb: FormBuilder) {
  }

  ngOnInit(): void {
    // create a form group with input validation
    this.nestedForm = this._fb.group({
      name: [null, Validators.required],
      region: [null, Validators.required],
      flag: [null, Validators.required],
      population: [null, [Validators.required, Validators.pattern('[0-9]*')]], // numbers regex validation
      languages: this._fb.array([this.addLanguagesGroup()])
    });
  }

  // method to add language form
  addLanguagesGroup()
  {
    return this._fb.group({
      name: [null, Validators.required],
      nativeName: [null, Validators.required],
      iso639_1: [null, Validators.required],
      iso639_2: [null, Validators.required]
    });
  }

  addLanguage()
  {
    this.languagesArray.push(this.addLanguagesGroup());
  }

  removeLanguage(index: number)
  {
    this.languagesArray.removeAt(index);
  }

  submitHandler() : void {
    this._http.invokeAddCountry(this.nestedForm.value);
  }

  /// -------- START form elements getters ----------
  get languagesArray()
  {
    return <FormArray>this.nestedForm.get('languages');
  }

  get name() {
    return this.nestedForm.get('name');
  }

  get region() {
    return this.nestedForm.get('region');
  }

  get population() {
    return this.nestedForm.get('population');
  }

  get flag() {
    return this.nestedForm.get('flag');
  }
  /// -------- END form elements getters ----------
}
