import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { IProduct } from 'src/app/task2/shared/model/shop.model';
import { ShopService } from 'src/app/task2/shared/services/shop.service';
import { ProductComponent } from '../product/product.component';
import { NgIf, NgFor } from '@angular/common';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.sass'],
    standalone: true,
    imports: [NgIf, NgFor, ProductComponent]
})
export class ProductListComponent implements OnInit, OnDestroy {

  private _productsService = inject(ShopService);

  products: IProduct[] = [];

  get isNullOrUndefined() {
    return this.products != null || this.products != undefined
  }

  addNewProduct(value: IProduct): void {
    this._productsService.addProduct(value);
  }

  ngOnInit(): void {
    this._productsService.products$.subscribe(x => this.products = x);
  }

  ngOnDestroy(): void {
    this._productsService.products$.unsubscribe()
  }
}
