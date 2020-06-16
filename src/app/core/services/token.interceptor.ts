import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CheerfulUserService } from 'src/app/core/services/cheerful-user.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public userService: CheerfulUserService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    request = request.clone({
      setHeaders: {
        Token: `${this.userService.token}`
      }
    });
    return next.handle(request);
  }
}
