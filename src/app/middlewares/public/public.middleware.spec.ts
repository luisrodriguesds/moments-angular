import { TestBed } from '@angular/core/testing';

import { PublicMiddleware } from './public.middleware';

describe('PublicMiddleware', () => {
  let service: PublicMiddleware;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PublicMiddleware);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
