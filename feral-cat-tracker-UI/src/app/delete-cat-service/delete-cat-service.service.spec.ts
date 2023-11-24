import { TestBed } from '@angular/core/testing';

import { DeleteCatServiceService } from './delete-cat-service.service';

describe('DeleteCatServiceService', () => {
  let service: DeleteCatServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteCatServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
