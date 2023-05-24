import { TestBed } from '@angular/core/testing';

import { AutoLogOffServiceService } from './auto-log-off-service.service';

describe('AutoLogOffServiceService', () => {
  let service: AutoLogOffServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutoLogOffServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
