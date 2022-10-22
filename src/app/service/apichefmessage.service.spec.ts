import { TestBed } from '@angular/core/testing';

import { ApichefmessageService } from './apichefmessage.service';

describe('ApichefmessageService', () => {
  let service: ApichefmessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApichefmessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
