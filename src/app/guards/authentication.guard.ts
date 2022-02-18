import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SpotifyService } from '../services/spotify.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanLoad {
  
  constructor(private router: Router, private spotifySevice: SpotifyService){}
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      // return new Promise((res) => {
      //   setTimeout(() => {
      //     res(true);
      //   }, 3000)
      // })
      const token = localStorage.getItem('token');

      if(!token){
        return this.noAuthentication();
      }
    return new Promise((res) => {
      const userLogin = this.spotifySevice.initializationUser();
      if(userLogin)
      res(true);
      else
      res(this.noAuthentication());
    })
  }

  noAuthentication(){
    localStorage.clear();
    this.router.navigate(['/login']);
    return false;
  }
}
