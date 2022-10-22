import { TestBed } from '@angular/core/testing';

import { ApiempmessageService } from './apiempmessage.service';

describe('ApiempmessageService', () => {
  let service: ApiempmessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiempmessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
