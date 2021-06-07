import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SongsService } from '../songs.service';

@Component({
  selector: 'app-englishhits',
  templateUrl: './englishhits.component.html',
  styleUrls: ['./englishhits.component.css']
})
export class EnglishhitsComponent implements OnInit {

  mySubscription:any;
  users;
  constructor(private tsObj:SongsService,private router:Router) { }

  ngOnInit(): void {
    this.mySubscription= this.tsObj.getEnglishSongs().subscribe(
      userData=>{
        this.users=userData;
      },
      err=>{
        console.log("err in getting posts data",err)
      }
   )

  }
}
