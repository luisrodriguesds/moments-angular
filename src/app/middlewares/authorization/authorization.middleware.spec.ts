import { TestBed } from '@angular/core/testing';

import { AuthorizationMiddleware } from './authorization.middleware';

describe('AuthorizationMiddleware', () => {
  let service: AuthorizationMiddleware;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorizationMiddleware);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
