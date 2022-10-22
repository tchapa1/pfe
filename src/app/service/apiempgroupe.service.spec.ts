import { TestBed } from '@angular/core/testing';

import { ApiempgroupeService } from './apiempgroupe.service';

describe('ApiempgroupeService', () => {
  let service: ApiempgroupeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiempgroupeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
