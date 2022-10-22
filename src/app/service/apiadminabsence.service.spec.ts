import { TestBed } from '@angular/core/testing';

import { ApiadminabsenceService } from './apiadminabsence.service';

describe('ApiadminabsenceService', () => {
  let service: ApiadminabsenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiadminabsenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
