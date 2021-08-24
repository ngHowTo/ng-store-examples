import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { configureSpy } from 'src/app/helpers/test.helper';
import { MockProductsApiService } from '../../apis/products/products-api.service.mock';
import { ProductsStoreService } from './products-store.service';

describe('ProductsStoreService', () => {
  let service: ProductsStoreService;

  beforeEach(() => {
    const mockProductsApiService = new MockProductsApiService();
    configureSpy(mockProductsApiService, 'getProducts', of(true));

    TestBed.configureTestingModule({
      providers: [
        ProductsStoreService,
        mockProductsApiService.getProviders()
      ]
    });
    service = TestBed.inject(ProductsStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
