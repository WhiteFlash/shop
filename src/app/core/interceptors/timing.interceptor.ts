import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpEventType
} from '@angular/common/http';
import { Observable, filter, tap } from 'rxjs';

@Injectable()
export class TimingInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const startTime = Date.now();

    let clonedRequest;
    if (req.method === "POST" || (req.method === "PUT")) {
      clonedRequest = req.clone({
        headers: new HttpHeaders(
          { "Content-Type": "application/json" }
        )
      });
    } else {
      clonedRequest = req;
    }

    return next.handle(clonedRequest).pipe(
      filter((event: HttpEvent<any>) => event.type === HttpEventType.Response),
      tap(() => {
        const endTime = Date.now();
        const elapsedTime = endTime - startTime;
        console.log(`Request ${req.method} to ${req.urlWithParams} took ${elapsedTime}ms`);
      })
    );
  }
}
