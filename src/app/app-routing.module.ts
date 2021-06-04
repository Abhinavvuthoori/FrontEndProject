import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyfavouritesComponent } from './myfavourites/myfavourites.component';
import { SigninComponent } from './signin/signin.component';
import { TelugutophitsComponent } from './telugutophits/telugutophits.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'telugu',component:TelugutophitsComponent},
  {path:'signin',component:SigninComponent},
  {path:'myfavourites',component:MyfavouritesComponent},
  
  {path:'',redirectTo:'/home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
