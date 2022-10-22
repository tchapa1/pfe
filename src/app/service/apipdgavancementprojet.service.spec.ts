import { TestBed } from '@angular/core/testing';

import { ApipdgavancementprojetService } from './apipdgavancementprojet.service';

describe('ApipdgavancementprojetService', () => {
  let service: ApipdgavancementprojetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApipdgavancementprojetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
