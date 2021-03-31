import { TestBed } from '@angular/core/testing';

import { AddZoneServiceService } from './add-zone-service.service';

describe('AddZoneServiceService', () => {
  let service: AddZoneServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddZoneServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
