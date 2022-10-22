import { TestBed } from '@angular/core/testing';

import { ApiadminmessageService } from './apiadminmessage.service';

describe('ApiadminmessageService', () => {
  let service: ApiadminmessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiadminmessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
