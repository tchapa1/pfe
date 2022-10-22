import { TestBed } from '@angular/core/testing';

import { ApiadminadminService } from './apiadminadmin.service';

describe('ApiadminadminService', () => {
  let service: ApiadminadminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiadminadminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
