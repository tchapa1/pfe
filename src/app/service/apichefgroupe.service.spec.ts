import { TestBed } from '@angular/core/testing';

import { ApichefgroupeService } from './apichefgroupe.service';

describe('ApichefgroupeService', () => {
  let service: ApichefgroupeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApichefgroupeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
