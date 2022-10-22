import { TestBed } from '@angular/core/testing';

import { ApichefcongeService } from './apichefconge.service';

describe('ApichefcongeService', () => {
  let service: ApichefcongeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApichefcongeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
