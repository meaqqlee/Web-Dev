import { Component, OnInit } from '@angular/core';
import {Product} from "../models/Product";
import {DataService} from "../services/data.service";
import {ProductItemComponent} from "../product-item/product-item.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  imports: [
    ProductItemComponent,
    NgForOf,
    NgForOf
  ],
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.selectedCategories$.subscribe(selectedCategories => {
      this.products = this.dataService.getProductsByCategories(selectedCategories);
    });
  }
}
