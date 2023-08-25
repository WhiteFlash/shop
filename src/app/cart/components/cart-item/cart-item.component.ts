import { Component, Input, inject } from '@angular/core';
import { IProduct } from 'src/app/shared/model/shop.model';
import { CartService } from '../../services/cart.service';
import { YesNoPipe } from '../../../shared/pipes/yes-no.pipe';
import { NgIf } from '@angular/common';
import { HighlightDirective } from 'src/app/shared/directives/highlight.directive';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.sass'],
  standalone: true,
  imports: [NgIf, YesNoPipe, HighlightDirective]
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
