import { TestBed } from '@angular/core/testing';

import { ApiempcongeService } from './apiempconge.service';

describe('ApiempcongeService', () => {
  let service: ApiempcongeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiempcongeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
