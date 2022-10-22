import { TestBed } from '@angular/core/testing';

import { ApipdgempService } from './apipdgemp.service';

describe('ApipdgempService', () => {
  let service: ApipdgempService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApipdgempService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
