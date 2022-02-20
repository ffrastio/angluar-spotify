import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { newMusic } from '../Common/factories';
import { IMusic } from '../interfaces/IMusic';
import { SpotifyService } from './spotify.service';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  musicPlaying = new BehaviorSubject<IMusic>(newMusic());
  timerId: any = null;

  constructor(private spotifyService: SpotifyService) { 
    this.getMusicPlaying();
  }

  async getMusicPlaying(){
    clearTimeout(this.timerId);
    
    const music = await this.spotifyService.getMusicPlaying();
    this.defMusicPlaying(music);
    
    
    // change music
    this.timerId = setInterval(async () => {
      await this.getMusicPlaying();
    }, 5000)
  }

  defMusicPlaying(music: IMusic){
    this.musicPlaying.next(music);
  }

  async prevMusic(){
    await this.spotifyService.prevMusic();
  }

  async forwMusic(){
    await this.spotifyService.forwMusic();
  }
}
