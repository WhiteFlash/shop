import { Routes } from "@angular/router";
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartItemComponent } from "./components/cart-item/cart-item.component";
import { CartComponent } from "./cart.component";

//             \/ CART_ROUTES
export const CARD_ROUTES: Routes = [
  {
    path: '',
    component: CartComponent,
    children: [
      { path: 'list', component: CartListComponent },
      { path: 'edit/:cardID', component: CartItemComponent }
    ]
  },
]
