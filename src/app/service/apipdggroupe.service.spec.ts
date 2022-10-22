import { TestBed } from '@angular/core/testing';

import { ApipdggroupeService } from './apipdggroupe.service';

describe('ApipdggroupeService', () => {
  let service: ApipdggroupeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApipdggroupeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
