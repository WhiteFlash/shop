import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { ProductService } from 'src/app/task2/products/services/product.service';
import { BehaviorSubject, Subscription } from 'rxjs';
import { IProduct } from 'src/app/task1/models/product';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.sass']
})
export class CartListComponent implements OnInit, OnDestroy {
  private _subscription: Subscription[] = [];

  private _cartService = inject(CartService)
  private _productService = inject(ProductService)

  quantityIncorrectData = this._cartService.getTotalQuantity;
  quantity!: IProduct[];
  totalPrice!: number;

  ngOnInit(): void {
    this._productService.getProducts().forEach(x => {
      this._cartService.addProduct(x);
    });

    this._cartService.setItemsToBuy(this._productService.getProducts())
    this._subscription.push(this._cartService.totalQuantity$.subscribe(x => this.quantity = x));

    console.log(`Total quantity is : ${this.quantityIncorrectData}`);
    console.log(`Total price is : ${this.totalPrice}`);
    this.totalPrice = this._cartService.getTotalPrice;
  }




  ngOnDestroy(): void {
    this._subscription.forEach(x => x.unsubscribe);
  }
}
