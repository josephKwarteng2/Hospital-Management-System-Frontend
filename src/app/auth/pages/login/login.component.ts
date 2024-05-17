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
import { InitialSig, User } from '../../../shared/models/interfaces';
import { SelectValueAccessorDirective } from 'src/app/shared/directives/select-value-accessor.directive';
import { ToastService } from '@components/toast/toast.service';
import { CurrentUserService } from '../../services/current-user.service';
import { ToastComponent } from '@components/toast/toast.component';
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
    this.responseSignal.set({ success: null, error: null, pending: true });
    this.doctorLoginService.doctorLogin(this.loginForm.value).subscribe({
      next: (response) => this.handleLoginSuccess(response),

      error: (err) => this.handleLoginError(err),
    });
  }

  handleLoginSuccess(response: User) {
    this.currentUserService.setCurrentUser(response);
    this.toastService.toast({ message: 'Login Successful', status: 'success' });
    this.responseSignal.set({
      success: { message: 'Login Successful' },
      error: null,
      pending: false,
    });
    setTimeout(() => this.router.navigate(['/doctor/dashboard']), 3000);
  }

  handleLoginError(err: any) {
    this.toastService.toast({ message: err.error.message, status: 'error' });
    this.responseSignal.set({
      success: null,
      error: err.error.message,
      pending: false,
    });
  }
}
