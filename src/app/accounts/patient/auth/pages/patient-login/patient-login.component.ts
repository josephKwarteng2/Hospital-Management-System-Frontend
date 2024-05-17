import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PatientsLoginNavComponent } from '../../components/patients-login-nav/patients-login-nav.component';
import { PatientLoginFormComponent } from '../../components/patient-login-form/patient-login-form.component';
import { LoginComponent } from 'src/app/auth/pages/login/login.component';

@Component({
  selector: 'app-patient-login',
  standalone: true,
  imports: [
    CommonModule,
    PatientsLoginNavComponent,
    PatientLoginFormComponent,
    LoginComponent,
  ],
  templateUrl: './patient-login.component.html',
  styleUrl: './patient-login.component.css',
})
export class PatientLoginComponent {}
