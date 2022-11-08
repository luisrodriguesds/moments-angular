import { TestBed } from '@angular/core/testing';

import { HttpInterceptorProvider } from './http.interceptor';

describe('HttpInterceptorProvider', () => {
  let service: HttpInterceptorProvider;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpInterceptorProvider);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
