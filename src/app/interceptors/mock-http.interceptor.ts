import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MockedProductDtos } from '../services/apis/products/products.mock';

@Injectable({
  providedIn: 'root'
})
export class MockHttpInterceptor implements HttpInterceptor {

  constructor(private injector: Injector) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.method === 'GET' && request.url === 'http://localhost:4200/api/v1/products') {
      return of(new HttpResponse({ status: 200, body: MockedProductDtos() }));
    }
    next.handle(request);
  }
}
