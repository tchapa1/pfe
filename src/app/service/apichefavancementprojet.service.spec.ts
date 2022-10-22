import { TestBed } from '@angular/core/testing';

import { ApichefavancementprojetService } from './apichefavancementprojet.service';

describe('ApichefavancementprojetService', () => {
  let service: ApichefavancementprojetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApichefavancementprojetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
