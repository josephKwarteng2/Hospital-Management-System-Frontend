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
import { InitialSig } from '../../../shared/models/interfaces';

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
  public errorMessage = '';
  public successMessage = '';
  public loading = false;
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
    this.loading = true;
    this.responseSignal.set({
      success: null,
      error: null,
      pending: true,
    });
    event.preventDefault();
    this.doctorLoginService.doctorLogin(this.loginForm.value).subscribe({
      next: (response) => {
        this.successMessage = response.message;
        this.errorMessage = '';
        this.responseSignal.set({
          success: response,
          error: null,
          pending: false,
        });
        setTimeout(() => {
          this.router.navigate(['/dashboard']);
        }, 2000);
      },
      error: (error) => {
        this.errorMessage = error.error.message;
        this.successMessage = '';
        this.responseSignal.set({
          success: null,
          error: { message: error.error.message },
          pending: false,
        });
      },
    });
  }
}
