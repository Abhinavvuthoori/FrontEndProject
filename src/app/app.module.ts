import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms'
import { MyfavouritesComponent } from './myfavourites/myfavourites.component';
import { TelugutophitsComponent } from './telugutophits/telugutophits.component';
import { HindihitsComponent } from './hindihits/hindihits.component';
import { EnglishhitsComponent } from './englishhits/englishhits.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HomeComponent,
    MyfavouritesComponent,
    TelugutophitsComponent,
    HindihitsComponent,
    EnglishhitsComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
