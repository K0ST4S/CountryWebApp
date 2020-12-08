import { Component, NgZone, OnInit } from '@angular/core';
import { ICountry } from '../ICountry';
import { HttpService } from '../services/http.service';
import {
  SpeechSynthesisUtteranceFactoryService,
  SpeechSynthesisService,
} from '@kamiazya/ngx-speech-synthesis';
import { NgxSpeechToTextService } from 'ngx-speech-to-text';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent implements OnInit {
  static initialized: boolean;
  country: ICountry;
  constructor(private _http: HttpService,
    public f: SpeechSynthesisUtteranceFactoryService,
    public svc: SpeechSynthesisService,
    private speechRecognitionService: NgxSpeechToTextService,
    private router: Router,
    private zone: NgZone) {
  }

  ngOnInit(): void {
    this.country = this._http.selectedCountry; // assign the country

    // construct country details to speak out loud
    const details = [
      "Country name is " + this.country.name,
      "Capital is " + this.country.capital,
      this.country.name + " is located in " + this.country.region,
      (this.country.languages.length > 1 ? "Languages are: " : "Language is ") + this.country.languages.map(function (a) { return a.name }).join(', ') // account for single/plural form
    ];
    this.speak(details);

    // handle event listening
    if (!CountryDetailsComponent.initialized) {
      this.speechRecognitionService.responseText$.subscribe(res => {
        console.log(res);
        if (res.toLowerCase() === "back" || res.toLowerCase() === "return") { // listen for "back" or "Return" words from user
          this.zone.run(() => { // in that case return to home page
            this.onBack();
            this.router.navigate(['/']);
          })
        }
      });
      CountryDetailsComponent.initialized = true;
    }
  }

  // uses speech synthesis to speak out the array of strings
  speak(contents: string[]) {
    for (const text of contents) {
      const v = this.f.text(text);
      this.svc.speak(this.f.text(text));
    }
  }

  // back command callback
  onBack() {
    this.svc.cancel();
  }
}
