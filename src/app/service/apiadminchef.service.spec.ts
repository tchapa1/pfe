import { TestBed } from '@angular/core/testing';

import { ApiadminchefService } from './apiadminchef.service';

describe('ApiadminchefService', () => {
  let service: ApiadminchefService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiadminchefService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
