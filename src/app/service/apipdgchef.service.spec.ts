import { TestBed } from '@angular/core/testing';

import { ApipdgchefService } from './apipdgchef.service';

describe('ApipdgchefService', () => {
  let service: ApipdgchefService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApipdgchefService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
