import { TestBed } from '@angular/core/testing';

import { ApichefprojetService } from './apichefprojet.service';

describe('ApichefprojetService', () => {
  let service: ApichefprojetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApichefprojetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
