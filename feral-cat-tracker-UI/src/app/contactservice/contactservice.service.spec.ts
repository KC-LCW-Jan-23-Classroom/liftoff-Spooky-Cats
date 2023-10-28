import { TestBed } from '@angular/core/testing';

import { ContactserviceService } from './contactservice.service';

describe('ContactserviceService', () => {
  let service: ContactserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
