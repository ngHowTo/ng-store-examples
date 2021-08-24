import { TestBed } from '@angular/core/testing';

import { MockHttpInterceptor as MockHttpInterceptor } from './mock-http.interceptor';

describe('MockHttpInterceptor', () => {
  let service: MockHttpInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockHttpInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
