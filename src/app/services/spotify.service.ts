import { Injectable } from '@angular/core';
import { SpotifyConfiguration } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor() { }

  loginURL(){
    const loginEndPoint = `${SpotifyConfiguration.authEndpoint}?`;
    const clientId =`client_id=${SpotifyConfiguration.clientId}&`;
    const redirectUrl = `redirect_uri=${SpotifyConfiguration.redirectUrl}&`;
    const scopes = `scopes=${SpotifyConfiguration.scopes.join('20%')}&`;
    const responseType = `response_type=token&show_dialog=true`;
    return loginEndPoint + clientId + redirectUrl + scopes + responseType;
  }

  tokenUrlCallback(){
    console.log(window.location.hash)
    if(!window.location.hash)
    return '';

    const params = window.location.hash.substring(1).split('&');
    return params[0].split('=')[1];
    
  }
}
