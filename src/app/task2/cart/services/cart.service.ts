import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { IProduct } from 'src/app/task1/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService implements OnDestroy {
  private subscription: Subscription[] = [];

  totalPrice$ = new BehaviorSubject<number>(0);
  totalQuantity$ = new BehaviorSubject<IProduct[]>([]);

  totalPrice: number[] = [];
  totalQuantity: IProduct[] = [];

  get getTotalPrice() {
    let sum = 0;
    for (let i = 0; i < this.totalQuantity.length; i++) {
      sum = sum + this.totalQuantity[i].price;
    }
    return sum;
  }

  get getTotalQuantity() {
    return this.totalQuantity.length + 1;
  }

  addProduct(product: IProduct): void {
    this.totalQuantity.push(product);
  }

  setItemsToBuy(products: Array<IProduct>): void {
    this.totalQuantity$.next(products);
    this.calculatePrice(products);
  }

  private calculatePrice(products: Array<IProduct>): void {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
      sum = sum + products[i].price;
    }
    this.totalPrice$.next(sum);
  }

  ngOnDestroy(): void {
    this.subscription.forEach(x => x.unsubscribe);
  }
}
