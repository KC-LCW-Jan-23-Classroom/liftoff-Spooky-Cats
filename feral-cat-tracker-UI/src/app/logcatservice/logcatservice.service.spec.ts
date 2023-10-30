import { TestBed } from '@angular/core/testing';

import { LogcatserviceService } from './logcatservice.service';

describe('LogcatserviceService', () => {
  let service: LogcatserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogcatserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
