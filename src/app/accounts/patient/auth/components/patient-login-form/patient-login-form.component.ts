import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { AuthNavComponent } from 'src/app/auth/components/auth-nav/auth-nav.component';
import { CustomInputFieldComponent } from '@components/custom-input-field/custom-input-field.component';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { getControlErrors } from 'src/app/shared/utils/constants';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { User, InitialSig } from 'src/app/shared/models/interfaces';
import { SelectValueAccessorDirective } from 'src/app/shared/directives/select-value-accessor.directive';
import { ToastService } from '@components/toast/toast.service';
import { CurrentUserService } from 'src/app/auth/services/current-user.service';
import { ToastComponent } from '@components/toast/toast.component';
import { LoginUserResponse } from 'src/app/shared/models/auth.types';

@Component({
  selector: 'app-patient-login-form',
  standalone: true,
  imports: [
    CommonModule,
    AuthNavComponent,
    CustomInputFieldComponent,
    ReactiveFormsModule,
    RouterLink,
    SelectValueAccessorDirective,
    ToastComponent,
  ],
  templateUrl: './patient-login-form.component.html',
  styleUrls: [
    './patient-login-form.component.css',
    '../../../../../auth/styles/styles.css',
  ],
})
export class PatientLoginFormComponent {
  public responseSignal = signal<InitialSig>({
    success: null,
    error: null,
    pending: false,
  });
  router: Router = inject(Router);
  doctorLoginService: AuthService = inject(AuthService);
  private currentUserService: CurrentUserService = inject(CurrentUserService);
  private toastService: ToastService = inject(ToastService);

  public errorMessage = '';
  public successMessage = '';
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  public getEmailErrors(): string {
    return getControlErrors(
      'email',
      {
        required: 'This field is required',
        email: 'Enter a valid email address',
      },
      this.loginForm
    );
  }

  public getPasswordErrors(): string {
    return getControlErrors(
      'password',
      {
        required: 'This field is required',
      },
      this.loginForm
    );
  }

  public login(event: Event) {
    event.preventDefault();

    if (this.loginForm.invalid) {
      return this.toastService.toast({
        message: 'Please fill in all fields',
        status: 'error',
      });
    }

    this.responseSignal.set({ success: null, error: null, pending: true });
    this.doctorLoginService.doctorLogin(this.loginForm.value).subscribe({
      next: (response) => this.handleLoginSuccess(response),

      error: (err) => this.handleLoginError(err),
    });
  }

  handleLoginSuccess(response: LoginUserResponse) {
    this.currentUserService.setCurrentUser(response.user);
    this.toastService.toast({ message: 'Login Successful', status: 'success' });
    this.responseSignal.set({
      success: { message: 'Login Successful' },
      error: null,
      pending: false,
    });
    setTimeout(() => this.router.navigate(['/patient/dashboard']), 3000);
  }

  handleLoginError(err: any) {
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
}
