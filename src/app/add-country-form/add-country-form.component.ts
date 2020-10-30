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
    this.nestedForm = this._fb.group({
      name: [null, Validators.required],
      region: [null, Validators.required],
      flag: [null, Validators.required],
      population: [null, Validators.required],
      languages: this._fb.array([this.addLanguagesGroup()])
    });
  }

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
    console.log(this.nestedForm.value);
    this._http.invokeAddCountry(this.nestedForm.value);
  }

  get languagesArray()
  {
    return <FormArray>this.nestedForm.get('languages');
  }

  findInvalidControls() {
    var invalid = [];
    var controls = this.nestedForm.controls;
    for (var name in controls) {
        if (controls[name].invalid) {
            invalid.push(name);
        }
    }
    console.log(invalid);
}
}
