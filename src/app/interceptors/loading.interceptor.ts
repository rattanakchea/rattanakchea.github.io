import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  activeRequests: number = 0;

  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log("loading interceptor ");
    return next.handle(request);
  }
}

export const loadingInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
];
