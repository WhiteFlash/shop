import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../models/product.model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass']
})
export class ProductListComponent implements OnInit, OnDestroy {

  private _productsService = inject(ProductService);

  products!: null | IProduct[];

  addNewProduct(value: IProduct): void {
    this._productsService.addProduct(value);
  }

  ngOnInit(): void {
    this._productsService.products$.subscribe(
      x => this.products = x
    );
  }

  ngOnDestroy(): void {
    this._productsService.products$.unsubscribe()
  }
}
