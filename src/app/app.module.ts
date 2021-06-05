import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { MyfavouritesComponent } from './myfavourites/myfavourites.component';
import { TelugutophitsComponent } from './telugutophits/telugutophits.component';
import { HindihitsComponent } from './hindihits/hindihits.component';
import { EnglishhitsComponent } from './englishhits/englishhits.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HomeComponent,
    MyfavouritesComponent,
    TelugutophitsComponent,
    HindihitsComponent,
    EnglishhitsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
