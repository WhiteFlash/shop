import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const canActivateAdminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  const { url } = state;

  // в этом методе нет проверки роли пользователя
  if (authService.checkLogin(url)) {
    return true;
  } else {
    router.navigate(['product/list']);
    return false;
  }
};
