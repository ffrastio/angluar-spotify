import { Injectable } from '@angular/core';
import { SpotifyConfiguration } from 'src/environments/environment';
import Spotify from 'spotify-web-api-js';
import { IUser } from '../interfaces/IUser';
import { SpotifyArtistsParams, SpotifyPlaylistParams, SpotifyUserParams } from '../Common/spotifyHelpers';
import { IPlaylist } from '../interfaces/IPlaylist';
import { Router } from '@angular/router';
import { IArtists } from '../interfaces/IArtists';

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
    localStorage.setItem('user', JSON.stringify(await this.spotifyApi.getMe()) );
    const userInfo = JSON.parse(localStorage.getItem('user'));
    this.user = SpotifyUserParams(userInfo);
    console.log(this.user)
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

  async AccessToken(token:string){
    
    this.spotifyApi.setAccessToken(token);
    localStorage.setItem('token', token);
  }


  async buscarPlaylistUser(offset = 0, limit = 50): Promise<IPlaylist[]>{
    const userInfo = JSON.parse(localStorage.getItem('user'));
    this.user = SpotifyUserParams(userInfo);
    const playlists = await this.spotifyApi.getUserPlaylists(this.user.id, {offset,limit});
    console.log(playlists)
    return playlists.items.map(SpotifyPlaylistParams);
  } 

  async getTopArtist( limit = 10): Promise<IArtists[]>{
    const artists = await this.spotifyApi.getMyTopArtists({limit});
    return artists.items.map(SpotifyArtistsParams);
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
