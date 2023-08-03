import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Task2RoutingModule } from './task2-routing.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { CartModule } from './cart/cart.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    Task2RoutingModule,
    ProductsModule,
    OrdersModule,
    CartModule,
    SharedModule
  ]
})
export class Task2Module { }
