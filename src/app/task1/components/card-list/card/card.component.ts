import { Component, Input, inject } from '@angular/core';
import { Category, IProduct } from 'src/app/task1/models/product';
import { ConverterService } from 'src/app/task1/services/converter.service';
import { ProductService } from 'src/app/task1/services/product.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass']
})
export class CardComponent {
  @Input() product: IProduct | null = null;

  converterService = inject(ConverterService);
  private productService = inject(ProductService);

  onAddProduct() {
    this.productService.addProduct({ name: 'test', category: Category.Phone, price: 250, isAvaliable: false, description: 'test description' })
  }
}
