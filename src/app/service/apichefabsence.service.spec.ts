import { TestBed } from '@angular/core/testing';

import { ApichefabsenceService } from './apichefabsence.service';

describe('ApichefabsenceService', () => {
  let service: ApichefabsenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApichefabsenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
