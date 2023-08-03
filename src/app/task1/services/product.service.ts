import { Injectable } from '@angular/core';
import { IProduct, Category } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Array<IProduct> {
    return [{
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
      price: 2500000,
      isAvaliable: true,
      category: Category.Car
    }]
  }

}
