import { TestBed } from '@angular/core/testing';

import { ApiempempService } from './apiempemp.service';

describe('ApiempempService', () => {
  let service: ApiempempService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiempempService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
