import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SongsService } from '../songs.service';
import {Subscription} from 'rxjs'

@Component({
  selector: 'app-telugutophits',
  templateUrl: './telugutophits.component.html',
  styleUrls: ['./telugutophits.component.css']
})
export class TelugutophitsComponent implements OnInit {

  mySubscription:any;
  users;
  constructor(private tsObj:SongsService,private router:Router) { }

  ngOnInit(): void {
    this.mySubscription= this.tsObj.getUsersById().subscribe(
      userData=>{
        this.users=userData;
      },
      err=>{
        console.log("err in getting posts data",err)
      }
   )

  }
}
