import { Routes } from "@angular/router";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductComponent } from "./product.component";
import { ProductViewComponent } from "./components/product-view/product-view.component";

export const PRODUCT_ROUTING: Routes = [
  {
    path: '',
    component: ProductComponent,
    children: [
      { path: 'list', component: ProductListComponent },
      { path: 'edit/:productID', component: ProductViewComponent }
    ]
  }
]
