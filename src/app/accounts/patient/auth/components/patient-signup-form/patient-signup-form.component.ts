import { CommonModule } from '@angular/common';
import { Component, OnInit, signal, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CustomInputFieldComponent } from '@components/custom-input-field/custom-input-field.component';
import { ToastComponent } from '@components/toast/toast.component';
import { ToastService } from '@components/toast/toast.service';
import { AuthNavComponent } from 'src/app/auth/components/auth-nav/auth-nav.component';
import { AuthService } from 'src/app/auth/services/auth.service';
import { CurrentUserService } from 'src/app/auth/services/current-user.service';
import { InputFields } from 'src/app/shared/models/interfaces';
import { InitialSig, User } from 'src/app/shared/models/auth.types';
import { PatientSignupProgressService } from '../../../services/patient-signup-progress.service';
import { EmailService } from 'src/app/auth/services/email.service';
import { SignUpUserResponse } from 'src/app/shared/models/auth.types';

@Component({
  selector: 'app-patient-signup-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthNavComponent,
    CustomInputFieldComponent,
    ToastComponent,
    RouterLink,
  ],
  templateUrl: './patient-signup-form.component.html',
  styleUrls: [
    './patient-signup-form.component.css',
    '../../../../../auth/styles/styles.css',
  ],
})
export class PatientSignupFormComponent {
  private authService: AuthService = inject(AuthService);
  private toastService: ToastService = inject(ToastService);
  public signupProgress: PatientSignupProgressService = inject(
    PatientSignupProgressService
  );
  private emailService: EmailService = inject(EmailService);

  signupForm: FormGroup = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  responseSignal = signal<InitialSig>({
    success: null,
    error: null,
    pending: false,
  });

  ngOnInit(): void {}

  registerPatient(event: Event) {
    event.preventDefault();

    if (this.signupForm.invalid) {
      return this.toastService.toast({
        message: 'Please fill in all fields',
        status: 'error',
      });
    }

    const formData = this.signupForm.value;
    this.emailService.setEmail(formData.email);
    this.responseSignal.set({ success: null, error: null, pending: true });
    this.authService.patientSignup(formData).subscribe({
      next: (response) => {
        this.handleSignupSuccess(response);
      },
      error: (err) => {
        this.handleSignupError(err);
      },
    });
  }

  private handleSignupSuccess(response: SignUpUserResponse) {
    this.nextFormFieldAfterDelay('patientOtp', 3000);
    this.toastService.toast({
      message: response.user.message,
      status: 'success',
    });
    this.responseSignal.set({
      success: { message: response.user.message },
      error: null,
      pending: false,
    });
  }

  private handleSignupError(err: any) {
    let errorMessage = 'An unknown error occurred';

    if (err.status === 0) {
      errorMessage =
        'Network error: Please check your internet connection or try again later';
    } else if (err.error && err.error.message) {
      errorMessage = err.error.message;
    }
    this.toastService.toast({ message: errorMessage, status: 'error' });
    this.responseSignal.set({
      success: null,
      error: err.error.message || errorMessage,
      pending: false,
    });
  }

  private nextFormFieldAfterDelay(nextFormField: InputFields, delay: number) {
    setTimeout(() => {
      this.signupProgress.toggle(nextFormField);
    }, delay);
  }
}
