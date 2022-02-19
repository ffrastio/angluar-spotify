import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faHome, faMusic, faPerson } from '@fortawesome/free-solid-svg-icons';
import { IPlaylist } from 'src/app/interfaces/IPlaylist';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  menuActive = 'Home';
  playlists: IPlaylist[] = [];

  //icon
  homeIcon = faHome;
  albumIcon = faMusic;
  artistIcon = faPerson;
  playlistIcon = faMusic;

  constructor(
    private spotifyService: SpotifyService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.PlayList();
  }

  menuClick(active: string){
    this.menuActive = active;
    this.router.navigateByUrl('playlist/home')
  }

  async PlayList(){
    this.playlists = await this.spotifyService.GetPlaylistUser();
    console.log(this.playlists)
  }
}
