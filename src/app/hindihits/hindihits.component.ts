import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SongsService } from '../songs.service';

@Component({
  selector: 'app-hindihits',
  templateUrl: './hindihits.component.html',
  styleUrls: ['./hindihits.component.css']
})
export class HindihitsComponent implements OnInit {

  mySubscription:any;
  users=[];
  constructor(private tsObj:SongsService,private router:Router) { }

  ngOnInit(): void {
    this.mySubscription= this.tsObj.getHindiSongs().subscribe(
      userData=>{
        this.users=userData;
        console.log(this.users)
      },
      err=>{
        console.log("err in getting posts data",err)
      }
   )

  }
}
