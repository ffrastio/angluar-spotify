import { Component, OnInit } from '@angular/core';
import { IArtists } from 'src/app/interfaces/IArtists';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist-top',
  templateUrl: './artist-top.component.html',
  styleUrls: ['./artist-top.component.scss']
})
export class ArtistTopComponent implements OnInit {

  artists: IArtists[] = [];

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
  this.getTopArtist();
  }

  async getTopArtist(){
    this.artists = await this.spotifyService.getTopArtist(5);
    console.log(this.artists)
  }
}
