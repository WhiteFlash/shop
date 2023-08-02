import { Component, OnInit } from '@angular/core';

enum Category {
  Laptop,
  Phone,
  Car
}

interface IProduct {
  name: string;
  description: string
  price: number;
  isAvaliable: boolean;
  category: Category;
}

let products: () => Array<IProduct> = function () {
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
};

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.sass']
})

export class FirstComponent implements OnInit {
  name: string = 'MacBook Pro';
  description: string = 'Miracle';
  price!: number;
  isAvaliable = true;
  category: Category = Category.Laptop

  products!: Array<IProduct>;

  get getCategory() {
    switch (this.category) {
      case Category.Laptop:
        return 'Laptop'
      case Category.Phone:
        return 'Phone'
      case Category.Car:
        return 'Car'
    }
  }

  ngOnInit(): void {
    this.price = 4500;
    this.products = products();
  }

  convertCategory(value: Category): string {
    switch (value) {
      case Category.Laptop:
        return 'Laptop'
      case Category.Phone:
        return 'Phone'
      case Category.Car:
        return 'Car'
    }
  }

  converIsAvaliable(value: boolean): string { return value ? 'Yes' : 'No'; }
}
