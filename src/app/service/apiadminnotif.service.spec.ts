import { TestBed } from '@angular/core/testing';

import { ApiadminnotifService } from './apiadminnotif.service';

describe('ApiadminnotifService', () => {
  let service: ApiadminnotifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiadminnotifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
