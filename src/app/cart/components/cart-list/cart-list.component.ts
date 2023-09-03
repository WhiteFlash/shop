import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Subscription, tap } from 'rxjs';
import { ShopService } from 'src/app/shared/services/shop.service';
import { IProduct } from 'src/app/shared/model/shop.model';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { NgIf, NgFor, CurrencyPipe, CommonModule } from '@angular/common';
import { OrderByPipe } from 'src/app/shared/pipes/order-by.pipe';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.sass'],
  standalone: true,
  imports: [NgIf, NgFor, CartItemComponent, CurrencyPipe, OrderByPipe, CommonModule]
})
export class CartListComponent implements OnInit, OnDestroy {
  private subscription: Subscription[] = [];

  private cartService = inject(CartService);
  private shopService = inject(ShopService);

  totalPrice = 0;
  totalQuantity = 0;
  items: IProduct[] = [];
  isAcsending = false;
  sortOptions = ['name', 'price', 'quantity'];
  selectedOption = 'name'

  ngOnInit(): void {
    this.cartService.setItemsToBuy(this.shopService.getProducts());

    this.subscription.push(this.cartService.items$
      .pipe(tap((x) => this.items = x))
      .subscribe());

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

  orderByArray = (event: any) => this.isAcsending = this.isAcsending ? event.checked : !event.checked;
  setFilterByArray = (event: any) => this.selectedOption = event.value;
}
