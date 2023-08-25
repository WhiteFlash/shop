import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from 'src/app/task2/shared/model/shop.model';
import { YesNoPipe } from '../../../shared/pipes/yes-no.pipe';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.sass'],
    standalone: true,
    imports: [NgIf, YesNoPipe]
})
export class ProductComponent {
  @Input() product!: IProduct;
  @Output() addNewProduct = new EventEmitter<IProduct>();

  onAddToCart(product: IProduct) {
    console.log(`${product.name} has been bought`);
    this.addNewProduct.emit(product);
  }
}
