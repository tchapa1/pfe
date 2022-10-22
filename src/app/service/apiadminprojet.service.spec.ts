import { TestBed } from '@angular/core/testing';

import { ApiadminprojetService } from './apiadminprojet.service';

describe('ApiadminprojetService', () => {
  let service: ApiadminprojetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiadminprojetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
