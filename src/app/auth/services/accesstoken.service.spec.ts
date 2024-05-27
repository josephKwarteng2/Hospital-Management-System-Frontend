import { TestBed } from '@angular/core/testing';

import { AccessTokenService } from './accesstoken.service';

describe('AccessTokenService', () => {
  let service: AccessTokenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessTokenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
