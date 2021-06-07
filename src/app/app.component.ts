import { Component } from '@angular/core';
import { SongsService } from './songs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public fs:SongsService){}
  title = 'mymusic';
}
