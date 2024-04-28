import { TestBed } from '@angular/core/testing';

import { BetsApiService } from './bets-api.service';

describe('BetsApiService', () => {
  let service: BetsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BetsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
