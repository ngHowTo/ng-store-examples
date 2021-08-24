import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take, } from 'rxjs/operators';
import { ProductsApiService } from '../../apis/products/products-api.service';
import { ProductsDto } from '../../apis/products/products.dto';
import { Product } from './product.model';
import { mapProductsDtoToProducts } from './products-dto-to-products.mapper';

@Injectable({
  providedIn: 'root'
})
export class ProductsStoreService {
  private readonly productsSource = new BehaviorSubject<Product[]>(null);
  public readonly products$ = this.productsSource.asObservable();

  constructor(private productsApiService: ProductsApiService) { }

  public fetchProducts() {
    this.productsApiService.getProducts()
      .pipe(take(1))
      .subscribe((productsDto: ProductsDto) => {
        this.productsSource.next(mapProductsDtoToProducts(productsDto));
      });
  }
}
