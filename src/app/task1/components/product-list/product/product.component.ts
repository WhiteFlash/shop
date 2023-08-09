import { Component, Input, inject } from '@angular/core';
import { IProduct } from 'src/app/task1/models/product';
import { recorses } from 'src/assets/resources';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent {
  @Input() product!: IProduct;

  get buyButtonLable() {
    return recorses.task1.buttonBuy
  }

  onAddToCart(product: IProduct) {
    console.log(`${product.name} has been bought`);
  }
}
