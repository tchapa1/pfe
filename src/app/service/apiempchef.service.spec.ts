import { TestBed } from '@angular/core/testing';

import { ApiempchefService } from './apiempchef.service';

describe('ApiempchefService', () => {
  let service: ApiempchefService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiempchefService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
