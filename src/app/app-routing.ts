import { Routes } from "@angular/router";
import { canLoadBasketGuard } from "./core/guards/can-load-basket.guard";
import { canActivateAdminGuard } from "./core/guards/can-activate-admin.guard";

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
    canActivate: [canLoadBasketGuard],
    loadComponent: () => import('./process-order/process-order.component').then(x => x.ProcessOrderComponent)
  },
  {
    path: 'admin',
    canActivate: [canActivateAdminGuard],
    loadComponent: () => import('./admin/admin.component').then(x => x.AdminComponent)
  }
];
