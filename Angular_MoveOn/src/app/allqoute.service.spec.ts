import { TestBed } from '@angular/core/testing';

import { AllqouteService } from './allqoute.service';

describe('AllqouteService', () => {
  let service: AllqouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllqouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
