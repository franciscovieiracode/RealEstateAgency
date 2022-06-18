import { TestBed } from '@angular/core/testing';

import { RealEstateRestService } from './real-estate-rest.service';

describe('RealEstateRestService', () => {
  let service: RealEstateRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealEstateRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
