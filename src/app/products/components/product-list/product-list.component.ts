import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ShopService } from 'src/app/shared/services/shop.service'
import { ProductViewComponent } from '../product-view/product-view.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass'],
  standalone: true,
  imports: [NgIf, NgFor, ProductViewComponent, AsyncPipe]
})
export class ProductListComponent {
  productsService = inject(ShopService);

}
