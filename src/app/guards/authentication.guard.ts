import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanLoad {
  
  constructor(private router: Router){}
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
    return true;
  }

  noAuthentication(){
    localStorage.clear();
    this.router.navigate(['/login']);
    return false;
  }
}
