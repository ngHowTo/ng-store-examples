import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductsApiService } from './products-api.service';
import { MockedProductDtos } from './products.mock';

describe('ProductsApiService', () => {
  let service: ProductsApiService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ ProductsApiService ]
    });
    service = TestBed.inject(ProductsApiService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getProducts', () => {
    it('should call http Get method for the given route and return expected data', () => {
      const products = MockedProductDtos();
      service.getProducts().subscribe((data) => {
        expect(data).withContext(`expect data to be: ${products}`).toEqual(products);
      });
      const req = httpMock.expectOne('http://localhost:4200/api/v1/products');
      expect(req.request.method).withContext('expect http get method').toEqual('GET');
      req.flush(products);
    });
  });
});
