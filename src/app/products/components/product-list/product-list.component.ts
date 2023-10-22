import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ProductViewComponent } from '../product-view/product-view.component';
import { ProductState } from 'src/app/core/@ngrx/product/product.state';
import { Store } from '@ngrx/store';
import { AppState, productFeatureKey } from 'src/app/core/@ngrx/app.state';
import { Observable } from 'rxjs';
import * as ProductActions from '../../../core/@ngrx/product/product.actions'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.sass'],
  standalone: true,
  imports: [NgIf, NgFor, ProductViewComponent, AsyncPipe]
})
export class ProductListComponent implements OnInit {
  private readonly store = inject(Store<AppState>);
  productState$!: Observable<ProductState>;

  ngOnInit(): void {
    this.productState$ = this.store.select(productFeatureKey);
    this.store.dispatch(ProductActions.getProducts())
  }
}
