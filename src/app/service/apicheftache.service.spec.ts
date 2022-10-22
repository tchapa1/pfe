import { TestBed } from '@angular/core/testing';

import { ApicheftacheService } from './apicheftache.service';

describe('ApicheftacheService', () => {
  let service: ApicheftacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApicheftacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
