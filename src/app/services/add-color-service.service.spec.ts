import { TestBed } from '@angular/core/testing';

import { AddColorServiceService } from './add-color-service.service';

describe('AddColorServiceService', () => {
  let service: AddColorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddColorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
