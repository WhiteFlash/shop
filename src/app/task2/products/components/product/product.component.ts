import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/task2/shared/model/shop.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent {
  @Input() product!: IProduct;
  @Output() addNewProduct = new EventEmitter<IProduct>();

  onAddToCart(product: IProduct) {
    console.log(`${product.name} has been bought`);
    this.addNewProduct.emit(product);
  }
}
