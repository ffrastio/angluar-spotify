import { Component, OnInit } from '@angular/core';
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

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.PlayList();
  }

  menuClick(active: string){
    this.menuActive = active;
  }

  async PlayList(){
    this.playlists = await this.spotifyService.GetPlaylistUser();
    console.log(this.playlists)
  }
}
