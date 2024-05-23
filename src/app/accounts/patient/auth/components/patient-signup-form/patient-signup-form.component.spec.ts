import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientSignupFormComponent } from './patient-signup-form.component';

describe('PatientSignupFormComponent', () => {
  let component: PatientSignupFormComponent;
  let fixture: ComponentFixture<PatientSignupFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientSignupFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatientSignupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
