import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { FirstComponent } from './components/first/first.component';



@NgModule({
  declarations: [
    ProductComponent,
    FirstComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ProductComponent, FirstComponent]
})
export class Task1Module { }
