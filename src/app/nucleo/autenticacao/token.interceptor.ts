import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('access_token');

  if (token) {
    const reqAutenticado = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    });
    return next(reqAutenticado);
  }

  return next(req);
};
