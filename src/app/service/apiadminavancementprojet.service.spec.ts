import { TestBed } from '@angular/core/testing';

import { ApiadminavancementprojetService } from './apiadminavancementprojet.service';

describe('ApiadminavancementprojetService', () => {
  let service: ApiadminavancementprojetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiadminavancementprojetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
