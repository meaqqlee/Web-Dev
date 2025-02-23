import { Component } from '@angular/core';
import {Category} from "./models/Category";
import {DataService} from "./services/data.service";
import {ProductListComponent} from "./product-list/product-list.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-root',
  imports: [ProductListComponent, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title(title: any) {
      throw new Error('Method not implemented.');
  }
  categories: Category[] = [];
  selectedCategories: number[] = [];

  constructor(private dataService: DataService) {
    this.categories = this.dataService.getCategories();
  }

  onCategorySelect(categoryId: number): void {
    if (this.selectedCategories.includes(categoryId)) {
      this.selectedCategories = this.selectedCategories.filter(id => id !== categoryId);
    } else {
      this.selectedCategories.push(categoryId);
    }
    this.dataService.updateSelectedCategories(this.selectedCategories);
  }

  get selectedCategory() {
    return this.selectedCategories;
  }
}
