import { TestBed } from '@angular/core/testing';

import { ApiadmintacheService } from './apiadmintache.service';

describe('ApiadmintacheService', () => {
  let service: ApiadmintacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiadmintacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
