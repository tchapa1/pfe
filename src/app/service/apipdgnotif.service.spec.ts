import { TestBed } from '@angular/core/testing';

import { ApipdgnotifService } from './apipdgnotif.service';

describe('ApipdgnotifService', () => {
  let service: ApipdgnotifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApipdgnotifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
