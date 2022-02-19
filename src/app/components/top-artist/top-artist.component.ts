import { Component, OnInit } from '@angular/core';
import { newArtist } from 'src/app/Common/factories';
import { IArtists } from 'src/app/interfaces/IArtists';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-top-artist',
  templateUrl: './top-artist.component.html',
  styleUrls: ['./top-artist.component.scss']
})
export class TopArtistComponent implements OnInit {

  artistTop: IArtists = newArtist();

  constructor(private spotifyService: SpotifyService) { }

  ngOnInit(): void {
    this.topArtist();
  }

  async topArtist(){
    const artist = await this.spotifyService.getTopArtist(1);

    if(!!artist)
      this.artistTop = artist.pop();

      console.log(this.artistTop)
  }

}
