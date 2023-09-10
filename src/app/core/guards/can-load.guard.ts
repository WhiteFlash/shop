import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { ShopService } from 'src/app/shared/services/shop.service';

export const canLoadGuard: CanActivateFn = (route, state) => {
  const productService = inject(ShopService);
  const items = productService.products.filter(x => x.quantity > 0);

  return items.length > 0 ? true : false;
};
