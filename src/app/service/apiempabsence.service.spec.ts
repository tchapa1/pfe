import { TestBed } from '@angular/core/testing';

import { ApiempabsenceService } from './apiempabsence.service';

describe('ApiempabsenceService', () => {
  let service: ApiempabsenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiempabsenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
