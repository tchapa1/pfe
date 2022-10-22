import { TestBed } from '@angular/core/testing';

import { ApiempavancementtacheService } from './apiempavancementtache.service';

describe('ApiempavancementtacheService', () => {
  let service: ApiempavancementtacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiempavancementtacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
