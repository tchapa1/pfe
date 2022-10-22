import { TestBed } from '@angular/core/testing';

import { ApichefchefService } from './apichefchef.service';

describe('ApichefchefService', () => {
  let service: ApichefchefService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApichefchefService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
