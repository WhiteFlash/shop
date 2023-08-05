import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { IProduct } from '../../models/product.model';
import { ConverterService } from '../../services/converter.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent {
  @Input() product: IProduct | null = null;
  @Output() addNewProduct = new EventEmitter<IProduct>();

  converterService = inject(ConverterService);

  onAddToCart(product: IProduct) {
    console.log(`${product.name} has been bought`);
    this.addNewProduct.emit(product);
  }
}
