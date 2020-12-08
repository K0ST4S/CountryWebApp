import { Component, Input, NgZone, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpeechToTextService } from 'ngx-speech-to-text';
import { ICountry } from '../ICountry';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @ViewChild("input") input;
  @Input() countries: Array<ICountry>;
  static initialized: boolean;
  constructor(
    private speechRecognitionService: NgxSpeechToTextService,
    private _http: HttpService,
    private router: Router,
    private zone: NgZone
  ) { }

  ngOnInit() {
    if (!SearchComponent.initialized) {
      this.speechRecognitionService.responseText$.subscribe(res => {
        console.log(res);
        this.setText(res);
      });
      SearchComponent.initialized = true;
    }
  }

  // Sets text to input field
  setText(text: string) {
    this.input.nativeElement.focus();
    this.input.nativeElement.value = text;

    let selectedCountry: ICountry = null;
    this.countries.forEach(country => { // find a country that matches voice input results
      if (country.name.toLowerCase() === text.toLowerCase()) {
        selectedCountry = country;
      }
    });

    // if country is matched
    if (selectedCountry) {
      this._http.invokeUpdateDetailsPage(selectedCountry); // display the country
      this.zone.run(() => {
        this.router.navigate(['/details', { synthesis: true }]);
      });
    }
  }

  reset() {
    this.input.nativeElement.value = '';
  }
}
