import { TestBed } from '@angular/core/testing';

import { PasswordResetToggleService } from './password-reset-toggle.service';

describe('PasswordResetToggleService', () => {
  let service: PasswordResetToggleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasswordResetToggleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
