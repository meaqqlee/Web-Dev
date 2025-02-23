import { Injectable } from '@angular/core';
import {Category} from '../models/Category';
import {Product} from '../models/Product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private selectedCategoriesSubject = new BehaviorSubject<number[]>([]);
  selectedCategories$ = this.selectedCategoriesSubject.asObservable();

  private categories: Category[] = [
    { id: 1, name: 'Electronics', image: 'assets/images/electronics.jpg' },
    { id: 2, name: 'Clothing', image: 'assets/images/clothing.jpg' },
    { id: 3, name: 'Home & Kitchen', image: 'assets/images/home-kitchen.jpg' },
    { id: 4, name: 'Books', image: 'assets/images/books.jpg' },
    { id: 5, name: 'Sports', image: 'assets/images/sports.jpg' }
  ];

  private products: Product[] = [
    {
      id: 1,
      name: 'Samsung Galaxy S22',
      description: 'Latest Samsung flagship smartphone with high performance.',
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h3c/hf4/79948332138526.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s22-8-gb-128-gb-chernyi-109822981/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h3c/hf4/79948332138526.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h08/h8e/79948967804958.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h14/h46/79948965707806.jpg?format=gallery-medium'
      ],
      like: 0,
      categoryId: 1
    },
    {
      id: 2,
      name: 'Apple iPhone 14',
      description: 'The newest iPhone with advanced features and design.',
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb8/h19/86042949648414.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h9f/h4b/86042949681182.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h53/h30/86042949779486.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h52/h99/86042949812254.png?format=gallery-medium'
      ],
      like: 0,
      categoryId: 2
    },
    {
      id: 3,
      name: 'Xiaomi Redmi Note 11',
      description: 'Affordable smartphone with powerful performance.',
      rating: 4.3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hba/h2d/79840518275102.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-12-pro-5g-nfc-8-gb-256-gb-chernyi-109772767/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hba/h2d/79840518275102.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hcc/h3a/79840518799390.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h91/h2c/79843632283678.jpg?format=gallery-medium'
      ],
      like: 0,
      categoryId: 3
    },
    {
      id: 4,
      name: 'Pixel 8 Pro',
      description: 'High-end photography and performance from Google.',
      rating: 4.2,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hd1/hc9/84326216630302.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/google-pixel-8-pro-12-gb-128-gb-chernyi-114017043/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hd1/hc9/84326216630302.jpg?format=gallery-medium',
      ],
      like: 0,
      categoryId: 4
    },
    {
      id: 5,
      name: 'OnePlus 9 Pro',
      description: 'Fast and smooth performance with a sleek design.',
      rating: 4.4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc8/hb1/64516436590622.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/oneplus-9-pro-8-gb-128-gb-chernyi-107222599/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hc8/hb1/64516436590622.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hcd/hd0/64516439080990.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3a/h24/64516439605278.jpg?format=gallery-medium'
      ],
      like: 0,
      categoryId: 5
    },
    {
      id: 6,
      name: 'Sony WH-1000XM4 Headphones',
      description: 'u re not reading that right?',
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p9b/p4f/17913534.jpeg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/polos-pods-chernyi-132329791/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/p9b/p4f/17913534.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p4a/p76/17913535.png?format=gallery-medium',
      ],
      like: 0,
      categoryId: 0
    },
    {
      id: 7,
      name: 'charger BROOO',
      description: 'Зарядное устройство Xiaomi Mi 67W GaN Charger 2C1A EU белый',
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h23/h44/84930731474974.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/xiaomi-mi-67w-gan-charger-2c1a-eu-belyi-115910499/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h23/h44/84930731474974.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h50/hd0/84930731540510.jpg?format=gallery-medium',
      ],
      like: 0,
      categoryId: 0
    },
    {
      id: 8,
      name: 'idk',
      description: 'dont read this please i m too lazy to write description',
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h3d/h8e/64208874405918.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hfe/h17/64208876634142.jpg?format=gallery-medium'
      ],
      like: 0,
      categoryId: 0
    },
    {
      id: 9,
      name: 'HP Pavilion Gaming Laptop',
      description: 'Смартфон Apple iPhone 16 Pro Max 256Gb черный',
      rating: 4.3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h08/hd3/87295489376286.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h04/h8b/87295489409054.png?format=gallery-medium'
      ],
      like: 0,
      categoryId: 0
    },
    {
      id: 10,
      name: 'Смартфон Samsung Galaxy S24 Ultra',
      description: 'Смартфон Samsung Galaxy S24 Ultra 5G 12 ГБ/256 ГБ серый',
      rating: 4.4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-seryi-116043556/?c=750000000',
      gallery: [
        'https://resources.cdn-kaspi.kz/img/m/p/h7c/h38/84963297329182.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hfe/ha8/84963297394718.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hce/h21/84963123462174.png?format=gallery-medium'
      ],
      like: 0,
      categoryId: 0
    }
  ];

  updateSelectedCategories(categories: number[]) {
    this.selectedCategoriesSubject.next(categories);
  }

  getCategories(): Category[] {
    return this.categories;
  }

  getAllProducts(): Product[] {
    return this.products;
  }

  getProductsByCategories(categoryIds: number[]): Product[] {
    if (!categoryIds || categoryIds.length === 0) {
      return this.getAllProducts();
    }
    return this.products.filter(product => categoryIds.includes(product.categoryId));
  }
}
