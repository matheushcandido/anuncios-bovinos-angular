import { TestBed } from '@angular/core/testing';

import { VerifyPhoneService } from './verify-phone.service';

describe('VerifyPhoneService', () => {
  let service: VerifyPhoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerifyPhoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
