import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AccessTokenService } from '../services/accesstoken.service';

export const authInterceptor: HttpInterceptorFn = (request, next) => {
  const tokenService = inject(AccessTokenService);
  const token = tokenService.get();
  request = request.clone({
    setHeaders: {
      Authorization: token ? `Token ${token}` : '',
    },
  });
  return next(request);
};
