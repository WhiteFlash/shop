import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/task2/shared/model/shop.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent {
  // Я бы так не делал, так как инпут не принимает null, а принимает только IProduct,
  // так как он дочерний компонент для ProductListComponent.
  // Это позволит убрать проверки в шаблоне.
  @Input() product: IProduct | null = null;
  @Output() addNewProduct = new EventEmitter<IProduct>();

  onAddToCart(product: IProduct) {
    console.log(`${product.name} has been bought`);
    this.addNewProduct.emit(product);
  }
}
