import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistComponent } from './playlist.component';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserComponent } from 'src/app/components/user/user.component';
import { HomeComponent } from '../home/home.component';
import { TopArtistComponent } from 'src/app/components/top-artist/top-artist.component';
import { SidebarRightComponent } from '../../components/sidebar-right/sidebar-right.component';
import { SearchComponent } from '../../components/search/search.component';
import { FormsModule } from '@angular/forms';
import { ArtistTopComponent } from '../../components/artist-top/artist-top.component';
import { ArtistImageComponent } from '../../components/artist-image/artist-image.component';
import { PlayerCardComponent } from '../../components/player-card/player-card.component';

const routes: Routes = [
  {
    path:'',
    component: PlaylistComponent,
    children:[
      {
        path: 'home',
        component: HomeComponent,
      }
    ]
  }
]

@NgModule({
  declarations: [
    PlaylistComponent,
    SidebarComponent,
    MenuComponent,
    UserComponent,
    HomeComponent,
    TopArtistComponent,
    SidebarRightComponent,
    SearchComponent,
    ArtistTopComponent,
    ArtistImageComponent,
    PlayerCardComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class PlaylistModule { }
