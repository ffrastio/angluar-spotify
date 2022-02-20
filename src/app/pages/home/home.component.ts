import { Component, OnDestroy, OnInit } from '@angular/core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { newMusic } from 'src/app/Common/factories';
import { IMusic } from 'src/app/interfaces/IMusic';
import { PlayerService } from 'src/app/services/player.service';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  music: IMusic[] = []
  musicPlaying: IMusic = newMusic();

  subs: Subscription[] = [];

  playIcon = faPlay;

  constructor(private spotifyService: SpotifyService,
    private playerService: PlayerService) { }

  ngOnDestroy(): void {
      this.subs.forEach(sub => sub.unsubscribe());
  }

  ngOnInit(): void {
    this.getMusic();
    this.getMusicPlaying();
  }

  async getMusic(){
    this.music = await this.spotifyService.listMusic()
    console.log(this.music)
  }

  getArtist(music: IMusic){
    return music.artist.map(artist => artist.name).join(', ');
  }

  async playMusic(music: IMusic){
    await this.spotifyService.playMusic(music.id);
    this.playerService.defMusicPlaying(music);
  }

  getMusicPlaying(){
    const sub = this.playerService.musicPlaying.subscribe(music =>{
      this.musicPlaying = music;
      console.log('music playing', this.musicPlaying)
    });

    this.subs.push(sub);
  }
}
