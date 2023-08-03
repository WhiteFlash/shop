import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product-list/product/product.component';
import { FirstComponent } from './components/first/first.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { Task1RoutingModule } from './task1-routing.module';

@NgModule({
  declarations: [
    ProductComponent,
    FirstComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    Task1RoutingModule
  ],
  exports: [ProductListComponent, FirstComponent]
})
export class Task1Module { }
