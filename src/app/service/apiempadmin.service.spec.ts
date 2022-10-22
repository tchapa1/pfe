import { TestBed } from '@angular/core/testing';

import { ApiempadminService } from './apiempadmin.service';

describe('ApiempadminService', () => {
  let service: ApiempadminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiempadminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
