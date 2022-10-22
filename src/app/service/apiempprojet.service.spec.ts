import { TestBed } from '@angular/core/testing';

import { ApiempprojetService } from './apiempprojet.service';

describe('ApiempprojetService', () => {
  let service: ApiempprojetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiempprojetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
