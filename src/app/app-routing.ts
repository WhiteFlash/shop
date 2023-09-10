import { Routes } from "@angular/router";
import { canLoadGuard } from "./core/guards/can-load.guard";

export const routes: Routes = [
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart-routes').then(x => x.CARD_ROUTES)
  },
  {
    path: 'product',
    loadChildren: () => import('./products/product.routing').then(x => x.PRODUCT_ROUTING)
  },
  {
    path: 'order',
    canActivate: [canLoadGuard],
    loadComponent: () => import('./process-order/process-order.component').then(x => x.ProcessOrderComponent)
  }
];
