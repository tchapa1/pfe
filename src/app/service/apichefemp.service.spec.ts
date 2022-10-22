import { TestBed } from '@angular/core/testing';

import { ApichefempService } from './apichefemp.service';

describe('ApichefempService', () => {
  let service: ApichefempService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApichefempService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
