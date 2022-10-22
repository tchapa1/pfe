import { TestBed } from '@angular/core/testing';

import { ApiempavancementprojetService } from './apiempavancementprojet.service';

describe('ApiempavancementprojetService', () => {
  let service: ApiempavancementprojetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiempavancementprojetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
