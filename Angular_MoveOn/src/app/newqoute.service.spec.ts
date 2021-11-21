import { TestBed } from '@angular/core/testing';

import { NewqouteService } from './newqoute.service';

describe('NewqouteService', () => {
  let service: NewqouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewqouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
