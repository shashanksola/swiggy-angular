import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const localSigninData = localStorage.getItem('user');

  console.log(localSigninData);

  if (localSigninData != null) return true;
  else {
    router.navigateByUrl('/');
    alert('Signin to proceed');
    return false;
  }
};