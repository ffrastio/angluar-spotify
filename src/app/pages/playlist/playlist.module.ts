import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistComponent } from './playlist.component';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserComponent } from 'src/app/components/user/user.component';
import { HomeComponent } from '../home/home.component';

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
    HomeComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule.forChild(routes)
  ]
})
export class PlaylistModule { }
