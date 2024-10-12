import { TestBed } from '@angular/core/testing';

import { RealToyStoreApiService } from './real-toy-store-api.service';

describe('RealToyStoreApiService', () => {
  let service: RealToyStoreApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealToyStoreApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
