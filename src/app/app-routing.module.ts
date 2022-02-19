import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './guards/authentication.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'playlist'
  },
  {
    path: 'login',
    loadChildren: ()=> import('./pages/login/login.module').then(x => x.LoginModule)
  },
  {
    path:'playlist',
    loadChildren: ()=>import('./pages/playlist/playlist.module').then(mod=>mod.PlaylistModule),
    canLoad:[AuthenticationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
