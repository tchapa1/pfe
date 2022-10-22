import { TestBed } from '@angular/core/testing';

import { ApiemptacheService } from './apiemptache.service';

describe('ApiemptacheService', () => {
  let service: ApiemptacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiemptacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
