import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ActivatedRoute, RouterLink} from '@angular/router';
import { AlbumsService, Photo } from '../albums.service';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent {
  private route = inject(ActivatedRoute);
  private albumsService = inject(AlbumsService);

  photos: Photo[] = [];
  albumId = 0;

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getPhotosByAlbumId(this.albumId).subscribe(photos => {
      this.photos = photos;
    });
  }
}
