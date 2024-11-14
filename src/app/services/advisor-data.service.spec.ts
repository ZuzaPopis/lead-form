import { TestBed } from '@angular/core/testing';

import { AdvisorDataService } from './advisor-data.service';

describe('AdvisorDataService', () => {
  let service: AdvisorDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdvisorDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
