import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { CustomInputFieldComponent } from '@components/custom-input-field/custom-input-field.component';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-patient-login-form',
  standalone: true,
  imports: [
    CommonModule,
    CustomInputFieldComponent,
    RouterLink,
    ReactiveFormsModule,
  ],
  templateUrl: './patient-login-form.component.html',
  styleUrls: [
    './patient-login-form.component.css',
    '../../../../../auth/styles/styles.css',
  ],
})
export class PatientLoginFormComponent {
  router: Router = inject(Router);
  // doctorLoginService: AuthService = inject(AuthService);
  public errorMessage = '';
  public successMessage = '';
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  login(event: Event) {
    console.log('Login form submitted');
  }
}
