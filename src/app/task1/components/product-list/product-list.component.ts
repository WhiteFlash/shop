import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent {
  // Подчеркивание в идентификаторе очень редко используется
  private _productService = inject(ProductService)

  products = this._productService.getProducts();
}
