import { Component, Input, inject } from '@angular/core';
import { IProduct } from 'src/app/task2/shared/model/shop.model';
import { CartService } from '../../services/cart.service';
import { YesNoPipe } from '../../../shared/pipes/yes-no.pipe';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-cart-item',
    templateUrl: './cart-item.component.html',
    styleUrls: ['./cart-item.component.sass'],
    standalone: true,
    imports: [NgIf, YesNoPipe]
})
export class CartItemComponent {
  @Input() item!: IProduct;

  private cartService = inject(CartService);

  onQuantityIncrease(product: IProduct): void {
    product.quantity++;
    this.cartService.addProduct(product);
  }

  onQuantityDecrease(product: IProduct): void {
    product.quantity--;
    this.cartService.addProduct(product);
  }

  onDeleteItem(product: IProduct): void {
    this.cartService.removeProduct(product);
  }
}
