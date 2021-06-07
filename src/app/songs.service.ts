import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SongsService {

  constructor(private hc:HttpClient) { }
  
  getTeluguSongs():Observable<any>{
    return this.hc.get<any>('http://localhost:3000/telugu')
  }

  getHindiSongs():Observable<any>{
    return this.hc.get<any>('http://localhost:3000/hindi')

  }

  getEnglishSongs():Observable<any>{
    return this.hc.get<any>('http://localhost:3000/english')
  }
   //to check login status
 userLoginStatus():boolean{
  if(localStorage.getItem("username")==null){
    return false;
  }
  else{
    return true;
  }
}

//logout
userLogout(){
  localStorage.clear();
}

}
