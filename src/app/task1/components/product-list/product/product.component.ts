import { Component, Input, inject } from '@angular/core';
import { IProduct } from 'src/app/task1/models/product';
import { ConverterService } from 'src/app/task1/services/converter.service';
import { recorses } from 'src/assets/resources';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent {
  @Input() product: IProduct | null = null;
  // Я бы так сделал
  // @Input() product!: IProduct;
  converterService = inject(ConverterService);

  get buyButtonLable() {
    return recorses.task1.buttonBuy
  }

  onAddToCart(product: IProduct) {
    console.log(`${product.name} has been bought`);
  }
}
