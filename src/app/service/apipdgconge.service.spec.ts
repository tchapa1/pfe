import { TestBed } from '@angular/core/testing';

import { ApipdgcongeService } from './apipdgconge.service';

describe('ApipdgcongeService', () => {
  let service: ApipdgcongeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApipdgcongeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
