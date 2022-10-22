import { TestBed } from '@angular/core/testing';

import { ApichefnotifService } from './apichefnotif.service';

describe('ApichefnotifService', () => {
  let service: ApichefnotifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApichefnotifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
