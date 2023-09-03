import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { IProduct } from 'src/app/shared/model/shop.model';
import { ShopService } from 'src/app/shared/services/shop.service';
import { ProductComponent } from '../product/product.component';
import { NgIf, NgFor, AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass'],
  standalone: true,
  imports: [NgIf, NgFor, ProductComponent, AsyncPipe]
})
export class ProductListComponent implements OnInit, OnDestroy {
  productsService = inject(ShopService);

  products: IProduct[] = [];

  get isNullOrUndefined() {
    return this.products != null || this.products != undefined
  }

  addNewProduct(value: IProduct): void {
    this.productsService.addProduct(value);
  }

  ngOnInit(): void {
    this.productsService.products$.subscribe(x => this.products = x);
  }

  ngOnDestroy(): void {
    this.productsService.products$.unsubscribe()
  }
}
