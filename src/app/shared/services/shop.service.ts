import { Injectable, inject } from '@angular/core';
import { Category, IProduct } from '../model/shop.model';
import { BehaviorSubject } from 'rxjs';
import { ProductPromiseService } from './product-promise.service';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  products: Array<IProduct> = this.getProducts();
  products$ = new BehaviorSubject<IProduct[]>(this.products);

  private readonly productPromiceService = inject(ProductPromiseService);

  getProducts(): Array<IProduct> {
    let items = [{
      id: 1,
      name: 'iPhone 13',
      description: 'Cool gadjet',
      price: 1000,
      isAvaliable: true,
      category: Category.Phone,
      inTheBasket: true,
      quantity: 0
    },
    {
      id: 2,
      name: 'iPhone 14',
      description: 'Cool gadjet',
      price: 1500,
      isAvaliable: true,
      category: Category.Phone,
      quantity: 0,
      inTheBasket: true
    },
    {
      id: 3,
      name: 'Ferrari Enzo',
      description: 'Cool car',
      price: 250000,
      isAvaliable: true,
      category: Category.Car,
      quantity: 0,
      inTheBasket: true
    },
    {
      id: 4,
      name: 'Ferrari FFX',
      description: 'Cool car',
      price: 320000,
      isAvaliable: true,
      category: Category.Car,
      quantity: 0,
      inTheBasket: true
    }]
    return items;
  }

  addProduct(value: IProduct): void {
    this.products.push(value);
    this.products$.next(this.products);
  }
}
