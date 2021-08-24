import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsDto } from './products.dto';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {
  private baseUrl = 'http://localhost:4200/api/v1/products';

  constructor(private httpClient: HttpClient) { }

  public getProducts(): Observable<ProductsDto> {
    return this.httpClient.get<ProductsDto>(this.baseUrl);
  }
}
