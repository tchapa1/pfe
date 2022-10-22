import { TestBed } from '@angular/core/testing';

import { ApichefadminService } from './apichefadmin.service';

describe('ApichefadminService', () => {
  let service: ApichefadminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApichefadminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
