import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { AuthNavComponent } from '../../components/auth-nav/auth-nav.component';
import { BackgroundIllustrationComponent } from '../../components/background-illustration/background-illustration.component';
import { CustomInputFieldComponent } from '../../../components/custom-input-field/custom-input-field.component';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { getControlErrors } from '../../../shared/utils/constants';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { InitialSig } from 'src/app/shared/models/auth.types';
import { SelectValueAccessorDirective } from 'src/app/shared/directives/select-value-accessor.directive';
import { ToastService } from '@components/toast/toast.service';
import { ToastComponent } from '@components/toast/toast.component';
import { LoginUserResponse } from 'src/app/shared/models/auth.types';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    AuthNavComponent,
    BackgroundIllustrationComponent,
    CustomInputFieldComponent,
    ReactiveFormsModule,
    RouterLink,
    SelectValueAccessorDirective,
    ToastComponent,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../styles/styles.css'],
})
export class LoginComponent {
  public responseSignal = signal<InitialSig>({
    success: null,
    error: null,
    pending: false,
  });

  private router: Router = inject(Router);
  doctorLoginService: AuthService = inject(AuthService);
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
    this.doctorLoginService.login(this.loginForm.value).subscribe({
      next: (response) => this.handleLoginSuccess(response),
      error: (err) => this.handleLoginError(err),
    });
  }

  handleLoginSuccess(response: LoginUserResponse) {
    this.toastService.toast({
      message: 'Login Successful',
      status: 'success',
    });
    this.responseSignal.set({
      success: { message: 'Login Successful' },
      error: null,
      pending: false,
    });

    const role = response.role.toLocaleLowerCase();

    switch (role) {
      case 'administrator':
        this.router.navigate(['/admin-dashboard']);
        break;
      case 'doctor':
        this.router.navigate(['/doctor-dashboard']);
        break;
      case 'patient':
        this.router.navigate(['/patient-dashboard']);
        break;
      default:
        this.router.navigate(['/']);
        break;
    }
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
      error: errorMessage || err.error.message,
      pending: false,
    });
  }
}
