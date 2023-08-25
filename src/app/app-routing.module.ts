import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './task2/products/components/product-list/product-list.component';
import { CartListComponent } from './task2/cart/components/cart-list/cart-list.component';

const routes: Routes = [
  {
    path: 'task2',
    children: [
      {
        path: 'products',
        component: ProductListComponent
      },
      {
        path: 'carts',
        component: CartListComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
