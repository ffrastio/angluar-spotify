import { Component, OnDestroy, OnInit } from '@angular/core';
import { faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { newMusic } from 'src/app/Common/factories';
import { IMusic } from 'src/app/interfaces/IMusic';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.scss']
})
export class PlayerCardComponent implements OnInit, OnDestroy {

  //icon 

  prevIcon = faStepBackward;
  forwIcon = faStepForward

  music: IMusic = newMusic();
  subs: Subscription[] = [];
  constructor(private playerService: PlayerService) { }

  ngOnInit(): void {
    this.getMusicRun();
  }

  ngOnDestroy(): void {
      this.subs.forEach(sub => sub.unsubscribe());
  }

  async getMusicRun(){
    const sub = await this.playerService.musicPlaying.subscribe(music => {
      this.music = music;
    });
    
    this.subs.push(sub);
  }

  prevMusic(){
    this.playerService.prevMusic();
  }

  forwMusic(){
    this.playerService.forwMusic();
  }
}
