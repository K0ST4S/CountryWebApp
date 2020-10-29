import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CountryCardComponent } from './country-card/country-card.component';
import { AddCountryFormComponent } from './add-country-form/add-country-form.component';
import { FormGroup, FormsModule, ReactiveFormsModule  }   from '@angular/forms';
import { CommonModule } from "@angular/common";
import { UtilService } from "./services/util.service"
import { HttpService } from './services/http.service';
import { SortByPipe } from './pipes/sort-by.pipe';
import { HomeComponent } from './home/home.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    CountriesListComponent,
    CountryCardComponent,
    AddCountryFormComponent,
    SortByPipe,
    RoutingComponents,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  providers: [HttpService, UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
