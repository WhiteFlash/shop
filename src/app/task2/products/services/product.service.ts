import { Injectable } from '@angular/core';
import { Category, IProduct } from '../models/product.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Array<IProduct> = this.getProducts();
  products$ = new BehaviorSubject<IProduct[]>(this.products);
  constructor() { }

  getProducts(): Array<IProduct> {
    let items = [{
      name: 'iPhone 13',
      description: 'Cool gadjet',
      price: 1300,
      isAvaliable: true,
      category: Category.Phone
    },
    {
      name: 'iPhone 14',
      description: 'Cool gadjet',
      price: 1700,
      isAvaliable: false,
      category: Category.Phone
    },
    {
      name: 'Ferrari Enzo',
      description: 'Cool car',
      price: 250000,
      isAvaliable: true,
      category: Category.Car
    }]

    return items;
  }

  addProduct(value: IProduct): void {
    this.products.push(value);
    this.products$.next(this.products);
  }
}
