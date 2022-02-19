import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {  

  constructor(
    private spotifyService: SpotifyService,
    private router: Router) { 
  }

  ngOnInit(): void {
    this.verificationToken();
  }

  verificationToken(){
    const token = this.spotifyService.tokenUrlCallback();

    if (!!token) {
      this.spotifyService.AccessToken(token);
      this.router.navigate(['/playlist/home']);
    }
  }

  Login(){
   window.location.href =  this.spotifyService.loginURL();
  }

  
}
