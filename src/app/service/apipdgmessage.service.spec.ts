import { TestBed } from '@angular/core/testing';

import { ApipdgmessageService } from './apipdgmessage.service';

describe('ApipdgmessageService', () => {
  let service: ApipdgmessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApipdgmessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
