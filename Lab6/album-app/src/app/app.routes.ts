import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AlbumsListComponent } from './albums/albums-list/albums-list.component';
import { AlbumDetailComponent } from './albums/album-detail/album-detail.component';
import { AlbumPhotosComponent } from './albums/album-photos/album-photos.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'albums', component: AlbumsListComponent },
  { path: 'albums/:id', component: AlbumDetailComponent },
  { path: 'albums/:id/photos', component: AlbumPhotosComponent },
  { path: '**', redirectTo: '/home' }
];
