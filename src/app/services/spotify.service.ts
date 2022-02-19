import { Injectable } from '@angular/core';
import { SpotifyConfiguration } from 'src/environments/environment';
import Spotify from 'spotify-web-api-js';
import { IUser } from '../interfaces/IUser';
import { SpotifyPlaylistParams, SpotifyUserParams } from '../Common/spotifyHelpers';
import { IPlaylist } from '../interfaces/IPlaylist';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  
  spotifyApi: Spotify.SpotifyWebApiJs;
  user: IUser;

  constructor(private router: Router) {
    this.spotifyApi = new Spotify();
   }

   async initializationUser(){
      if(!!this.user)
        return true;

        const token = localStorage.getItem('token');
        
        if(!token)
        return false;

        try{
          
          this.AccessToken(token);
          await this.spotifyUser();
          return !!this.user;

        }catch(ex){
          return false;
        }
    }

  async spotifyUser(){
    const userInfo = await this.spotifyApi.getMe();
    this.user = SpotifyUserParams(userInfo);
  }

  loginURL(){
    const authEndpoint = `${SpotifyConfiguration.authEndpoint}?`;
    const clientId =`client_id=${SpotifyConfiguration.clientId}&`;
    const redirectUrl = `redirect_uri=${SpotifyConfiguration.redirectUrl}&`;
    const scopes = `scopes=${SpotifyConfiguration.scopes.join('20%')}&`;
    const responseType = `response_type=token&show_dialog=true`;
    return authEndpoint + clientId + redirectUrl + scopes + responseType;
  }

  tokenUrlCallback(){
    if(!window.location.hash)
    return '';

    const params = window.location.hash.substring(1).split('&');
    return params[0].split('=')[1];
    
  }

  AccessToken(token:string){
    this.spotifyApi.setAccessToken(token);
    localStorage.setItem('token', token);
  }

  async GetPlaylistUser(offset = 0, limit = 50): Promise<IPlaylist[]>{
    const playlists = await this.spotifyApi.getUserPlaylists(); //this.user.id, { offset, limit }
    return playlists.items.map(SpotifyPlaylistParams);
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
