import { TestBed } from '@angular/core/testing';

import { ApiadmingroupeService } from './apiadmingroupe.service';

describe('ApiadmingroupeService', () => {
  let service: ApiadmingroupeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiadmingroupeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
