import { ProductsApiService } from './products-api.service';

export class MockProductsApiService {
  public getProducts: any;

  constructor() {
  }

  public getProviders(): Array<any> {
    return [{provide: ProductsApiService, useValue: this}];
  }
}
