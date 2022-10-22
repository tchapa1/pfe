import { TestBed } from '@angular/core/testing';

import { ApichefpdgService } from './apichefpdg.service';

describe('ApichefpdgService', () => {
  let service: ApichefpdgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApichefpdgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
