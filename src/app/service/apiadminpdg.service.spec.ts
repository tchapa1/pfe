import { TestBed } from '@angular/core/testing';

import { ApiadminpdgService } from './apiadminpdg.service';

describe('ApiadminpdgService', () => {
  let service: ApiadminpdgService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiadminpdgService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
