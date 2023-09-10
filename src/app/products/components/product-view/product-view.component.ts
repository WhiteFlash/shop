import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category, IProduct } from 'src/app/shared/model/shop.model';
import { YesNoPipe } from 'src/app/shared/pipes/yes-no.pipe';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ShopService } from 'src/app/shared/services/shop.service';

const defaultProduct: IProduct = {
  id: 1,
  category: Category.Phone,
  description: '',
  inTheBasket: false,
  isAvaliable: false,
  name: '',
  price: 0,
  quantity: 0
}

@Component({
  selector: 'app-product-view',
  standalone: true,
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.sass'],
  imports: [CommonModule, YesNoPipe, RouterLink],
})
export class ProductViewComponent implements OnInit {
  @Input() product: IProduct = defaultProduct;

  router = inject(ActivatedRoute);
  shopService = inject(ShopService);

  ngOnInit(): void {
    const productIdFromRoute = this.router.snapshot.paramMap.get('productID') as string;
    if (productIdFromRoute != null || this.router.snapshot.paramMap.get('productID') != undefined) {
      this.product = this.shopService.products.find(x => x.id === parseInt(productIdFromRoute)) as IProduct;
      console.log(this.product);
    }

  }
}
