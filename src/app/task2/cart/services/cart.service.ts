import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { IProduct } from '../../shared/model/shop.model';


@Injectable({
  providedIn: 'root'
})
export class CartService implements OnDestroy {
  private subscription: Subscription[] = [];

  private totalPrice = new BehaviorSubject<number>(0);
  private totalQuantity = new BehaviorSubject<number>(0);
  private items = new BehaviorSubject<IProduct[]>([]);

  items$ = this.items.asObservable();
  totalQuantity$ = this.totalQuantity.asObservable();
  totalPrice$ = this.totalPrice.asObservable();

  addProduct(product: IProduct): void {
    const index = this.items.value.findIndex(x => x.id === product.id);
    this.items.value[index] = product;

    this.setPrice();
    this.setQuantity();
  }

  removeProduct(product: IProduct): void {
    const index = this.items.value.findIndex(x => x.id === product.id);
    this.items.value.splice(index, 1);

    this.setPrice();
    this.setQuantity();
  }

  setItemsToBuy(products: Array<IProduct>): void {
    const itemsAddedToBasket = products.filter(x => x.inTheBasket == true)
    this.items.next(itemsAddedToBasket);

    this.setPrice();
    this.setQuantity();
  }

  private setPrice = (): void => {
    let sum = 0;
    for (let i = 0; i < this.items.value.length; i++) {
      sum = (this.items.value[i].price * this.items.value[i].quantity) + sum;
    }
    this.totalPrice.next(sum);
  }

  private setQuantity = (): void => {
    let sum = 0;

    for (let i = 0; i < this.items.value.length; i++) {
      sum = this.items.value[i].quantity + sum;
    }

    this.totalQuantity.next(sum);
  }

  ngOnDestroy(): void {
    this.subscription.forEach(x => x.unsubscribe);
  }
}
