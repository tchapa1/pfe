import { TestBed } from '@angular/core/testing';

import { ApiempnotifService } from './apiempnotif.service';

describe('ApiempnotifService', () => {
  let service: ApiempnotifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiempnotifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
