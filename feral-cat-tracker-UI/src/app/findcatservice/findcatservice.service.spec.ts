import { TestBed } from '@angular/core/testing';

import { FindcatserviceService } from './findcatservice.service';

describe('FindcatserviceService', () => {
  let service: FindcatserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindcatserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
