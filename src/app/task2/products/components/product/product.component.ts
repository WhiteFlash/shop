import { Component, Input, inject } from '@angular/core';
import { IProduct } from '../../models/product.model';
import { ConverterService } from '../../services/converter.service';
import { recorses } from 'src/assets/resources';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent {
  @Input() product: IProduct | null = null;

  converterService = inject(ConverterService);

  get buyButtonLable() {
    return recorses.task1.buttonBuy
  }

  onAddToCart(product: IProduct) {
    console.log(`${product.name} has been bought`);
  }
}
