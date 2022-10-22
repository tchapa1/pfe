import { TestBed } from '@angular/core/testing';

import { ApiadminavancementtacheService } from './apiadminavancementtache.service';

describe('ApiadminavancementtacheService', () => {
  let service: ApiadminavancementtacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiadminavancementtacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
