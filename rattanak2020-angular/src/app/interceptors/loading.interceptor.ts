import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from "@angular/common/http";
import { Observable } from "rxjs";
import { LoadingScreenService } from "../shared/loading-screen/loading-screen.service";
import { finalize, delay } from "rxjs/operators";

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  activeRequests: number = 0;

  constructor(private loadingScreenService: LoadingScreenService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.activeRequests === 0) {
      this.loadingScreenService.startLoading();
    }
    this.activeRequests++;

    return next.handle(request).pipe(
      // delay(1000), // use to mimic slow network
      finalize(() => {
        this.activeRequests--;
        if (this.activeRequests === 0) {
          this.loadingScreenService.stopLoading();
        }
      })
    );
  }
}

export const loadingInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
];
