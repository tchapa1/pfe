import { TestBed } from '@angular/core/testing';

import { ApipdgadminService } from './apipdgadmin.service';

describe('ApipdgadminService', () => {
  let service: ApipdgadminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApipdgadminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
