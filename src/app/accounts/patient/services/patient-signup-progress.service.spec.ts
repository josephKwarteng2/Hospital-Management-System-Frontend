import { TestBed } from '@angular/core/testing';

import { PatientSignupProgressService } from './patient-signup-progress.service';

describe('PatientSignupProgressService', () => {
  let service: PatientSignupProgressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientSignupProgressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
