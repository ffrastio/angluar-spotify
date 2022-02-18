import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {  

  constructor(private spotifyService: SpotifyService) { 
  }

  ngOnInit(): void {
    this.verificationToken();
  }

  verificationToken(){
    const token = this.spotifyService.tokenUrlCallback();

    if (!!token) {
      this.spotifyService.AccessToken(token);
    }
  }

  Login(){
   window.location.href =  this.spotifyService.loginURL();
  }

  
}
