import { TestBed } from '@angular/core/testing';

import { ApipdgabsenceService } from './apipdgabsence.service';

describe('ApipdgabsenceService', () => {
  let service: ApipdgabsenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApipdgabsenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
