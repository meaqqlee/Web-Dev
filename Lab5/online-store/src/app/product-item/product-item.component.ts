import { Component, Input } from '@angular/core';
import {Product} from "../models/Product";
import { DataService } from "../services/data.service";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product!: Product;
  isLiked: boolean = false;

  constructor(private dataService: DataService) {}

  toggleLike() {
    if(this.isLiked) {
      this.product.like = this.product.like - 1;
    } else {
      this.product.like = this.product.like + 1;
    }
    this.isLiked = !this.isLiked;
  }

  remove() {
    this.dataService.removeProduct(this.product.id);
  }
}
