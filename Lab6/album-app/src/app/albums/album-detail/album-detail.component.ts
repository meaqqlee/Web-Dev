import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AlbumsService, Album } from '../albums.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css']
})
export class AlbumDetailComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private albumsService = inject(AlbumsService);

  album: Album | undefined;
  editedTitle = '';

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getAlbumById(id).subscribe(album => {
      this.album = album;
      this.editedTitle = album.title;
    });
  }

  saveChanges(): void {
    if (this.album && this.editedTitle !== this.album.title) {
      this.albumsService.updateAlbum(this.album.id, this.editedTitle).subscribe({
        next: (updatedAlbum) => {
          this.album = updatedAlbum;
          this.router.navigate(['/albums']);
        },
        error: (err) => console.error('Error updating album:', err)
      });
    }
  }
}
