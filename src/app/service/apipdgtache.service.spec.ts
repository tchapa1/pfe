import { TestBed } from '@angular/core/testing';

import { ApipdgtacheService } from './apipdgtache.service';

describe('ApipdgtacheService', () => {
  let service: ApipdgtacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApipdgtacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
