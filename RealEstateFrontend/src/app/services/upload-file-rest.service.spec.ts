import { TestBed } from '@angular/core/testing';

import { UploadFileRestService } from './upload-file-rest.service';

describe('UploadFileRestService', () => {
  let service: UploadFileRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadFileRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
