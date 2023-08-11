import { Component, Input, inject } from '@angular/core';
import { IProduct } from 'src/app/task2/shared/model/shop.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.sass']
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
