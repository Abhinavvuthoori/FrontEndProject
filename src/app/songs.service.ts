import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { telugu } from 'src/models/telugu.model';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  constructor(private hc:HttpClient) { }
  
  getUsersById():Observable<telugu>{
    return this.hc.get<telugu>('http://localhost:3000/telugu')
    
  }


}
