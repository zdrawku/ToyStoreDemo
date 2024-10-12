import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ToyStoreDataService } from './toy-store-data.service';

describe('ToyStoreDataService', () => {
  let service: ToyStoreDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ToyStoreDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
