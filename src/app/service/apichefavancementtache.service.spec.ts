import { TestBed } from '@angular/core/testing';

import { ApichefavancementtacheService } from './apichefavancementtache.service';

describe('ApichefavancementtacheService', () => {
  let service: ApichefavancementtacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApichefavancementtacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
