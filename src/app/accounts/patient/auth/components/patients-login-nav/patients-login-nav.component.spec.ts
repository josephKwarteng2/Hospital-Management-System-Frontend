import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsLoginNavComponent } from './patients-login-nav.component';

describe('PatientsLoginNavComponent', () => {
  let component: PatientsLoginNavComponent;
  let fixture: ComponentFixture<PatientsLoginNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientsLoginNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PatientsLoginNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
