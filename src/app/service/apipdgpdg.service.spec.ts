import { TestBed } from '@angular/core/testing';

import { ApipdgpdgService } from './apipdgpdg.service';

describe('ApipdgpdgService', () => {
  let service: ApipdgpdgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApipdgpdgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
