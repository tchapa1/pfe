import { TestBed } from '@angular/core/testing';

import { ApipdgprojetService } from './apipdgprojet.service';

describe('ApipdgprojetService', () => {
  let service: ApipdgprojetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApipdgprojetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
