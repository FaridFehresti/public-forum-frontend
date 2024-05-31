import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = this.authService.getToken();

    let cloned = req;

    if (accessToken) {
      cloned = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${accessToken}`),
      });
    }

    console.log('HTTP Request initiated:', cloned);

    return next.handle(cloned).pipe(
      tap(
        event => {
          console.log('HTTP Response received:', event);
        },
        error => {
          console.log('HTTP Request error:', error);
        }
      )
    );
  }
}

export const AuthInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true,
};
