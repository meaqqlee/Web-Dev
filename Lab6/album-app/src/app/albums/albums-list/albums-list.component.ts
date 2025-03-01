import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlbumsService, Album } from '../albums.service';
import {BehaviorSubject, Observable} from 'rxjs';

@Component({
  selector: 'app-albums-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.css']
})
export class AlbumsListComponent {
  private albumsSubject = new BehaviorSubject<Album[]>([]);
  albums$ = this.albumsSubject.asObservable();

  constructor(private albumsService: AlbumsService) {
    this.albumsService.getAlbums().subscribe(albums => {
      this.albumsSubject.next(albums);
    });
  }

  deleteAlbum(id: number): void {
    //if (confirm('Are you sure you want to delete this album?')) {
      this.albumsService.deleteAlbum(id).subscribe({
        next: () => {
          const updatedAlbums = this.albumsSubject.getValue().filter(album => album.id !== id);
          this.albumsSubject.next(updatedAlbums);
        },
        error: (err) => console.error('Error deleting album:', err)
      });
    //}
  }
}
