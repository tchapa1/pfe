import { TestBed } from '@angular/core/testing';

import { ApiadminempService } from './apiadminemp.service';

describe('ApiadminempService', () => {
  let service: ApiadminempService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiadminempService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
