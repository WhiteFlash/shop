import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { type Action } from '@ngrx/store';
import { Observable, concatMap, map, switchMap } from 'rxjs';
import * as ProductActions from 'src/app/core/@ngrx/product/product.actions'
import { IProduct } from 'src/app/shared/model/shop.model';
import { ProductsService } from 'src/app/shared/services/products.service';



@Injectable()
export class ProductEffects {
  private actions$ = inject(Actions);
  private productService = inject(ProductsService);

  getProducts$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.getProducts),
      switchMap(action => this.productService.getProducts()
        .pipe(
          map(products => ProductActions.getProductsSuccess({ products }))
        )
      )
    )
  );

  updateProduct$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.updateProduct),
      map(action => action.product),
      concatMap((product: IProduct) =>
        this.productService.updateProduct(product)
          .pipe(
            map(product => ProductActions.updateProductSuccess({ product }))
          )
      )
    )
  );

  createProduct$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.createProduct),
      map(action => action.product),
      concatMap((product: IProduct) =>
        this.productService.createProduct(product)
          .pipe(
            map(product => ProductActions.createProductSuccess({ product }))
          )
      )
    )
  );

  createUpdateProductSuccess$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.createProductSuccess, ProductActions.updateProductSuccess),
      map(action => ProductActions.back())
    )
  );

  deleteProduct$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.deleteProduct),
      map(action => action.productId),
      concatMap((productId: number) =>
        this.productService.deleteProduct(productId)
          .pipe(
            map(() => ProductActions.deleteProductSuccess({ productId }))
          )

      )
    )
  );

}
