import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './products/components/product-list/product-list.component'
import { CartListComponent } from './cart/components/cart-list/cart-list.component'

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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Task2RoutingModule { }
