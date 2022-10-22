import { TestBed } from '@angular/core/testing';

import { ApiemppdgService } from './apiemppdg.service';

describe('ApiemppdgService', () => {
  let service: ApiemppdgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiemppdgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
