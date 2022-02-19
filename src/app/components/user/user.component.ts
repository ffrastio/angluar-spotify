import { Component, OnInit } from '@angular/core';
import {faSignOut} from '@fortawesome/free-solid-svg-icons';
import { IUser } from 'src/app/interfaces/IUser';
import { SpotifyService } from 'src/app/services/spotify.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  //icon
  logout = faSignOut;

  user: IUser = null;
  constructor(
    private spotifyService: SpotifyService
  ) { }

  ngOnInit(): void {
    this.user = this.spotifyService.user;
  }

}
