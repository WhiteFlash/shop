import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { BehaviorSubject, Subscription, tap } from 'rxjs';
import { ShopService } from 'src/app/task2/shared/services/shop.service';
import { IProduct } from 'src/app/task2/shared/model/shop.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.sass']
})
export class CartListComponent implements OnInit, OnDestroy {
  private subscription: Subscription[] = [];

  private cartService = inject(CartService);
  private shopService = inject(ShopService);

  totalPrice!: number;
  totalQuantity!: number;
  items!: IProduct[];

  ngOnInit(): void {
    this.cartService.setItemsToBuy(this.shopService.getProducts());

    this.cartService.items$
      .pipe(tap((x) => this.items = x))
      .subscribe();

    this.subscription.push(this.cartService.totalPrice$
      .pipe(tap((x) => this.totalPrice = x))
      .subscribe());

    this.subscription.push(this.cartService.totalQuantity$
      .pipe(tap((x) => this.totalQuantity = x))
      .subscribe());
  }

  ngOnDestroy(): void {
    this.subscription.forEach(x => x.unsubscribe);
  }
}
