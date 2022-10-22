import { TestBed } from '@angular/core/testing';

import { ApiadmincongeService } from './apiadminconge.service';

describe('ApiadmincongeService', () => {
  let service: ApiadmincongeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiadmincongeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
