import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CustomInputFieldComponent } from '../../../components/custom-input-field/custom-input-field.component';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CurrentUserService } from '../../services/current-user.service';
import { SignupService } from '../../services/signup.service';
import {
  InitialSig,
  SignUpProgress,
  User,
} from 'src/app/shared/models/interfaces';
import { EmailService } from '../../services/email.service';
import { ToastComponent } from '@components/toast/toast.component';
import { ToastService } from '@components/toast/toast.service';

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomInputFieldComponent,
    RouterLink,
    ToastComponent,
  ],
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css', '../../styles/styles.css'],
})
export class SignupFormComponent implements OnInit {
  public responseSignal = signal<InitialSig>({
    success: null,
    error: null,
    pending: false,
  });
  private doctorRegistrationService: AuthService = inject(AuthService);
  private currentUserService: CurrentUserService = inject(CurrentUserService);
  private router: Router = inject(Router);
  private signupProgressService: SignupService = inject(SignupService);
  private emailService: EmailService = inject(EmailService);
  private toastService: ToastService = inject(ToastService);
  public errorMessage = '';
  public successMessage = '';

  signupForm: FormGroup = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {}

  public registerDoctor(event: Event) {
    event.preventDefault();
    const formData = this.signupForm.value;
    this.emailService.setEmail(formData.email);
    this.responseSignal.set({ success: null, error: null, pending: true });
    this.doctorRegistrationService.doctorRegistration(formData).subscribe({
      next: (response) => {
        this.handleSignupSuccess(response);
      },
      error: (err) => {
        this.handleSignupError(err);
      },
    });
  }

  private handleSignupSuccess(response: User) {
    this.nextFormFieldAfterDelay('otpForm', 3000);
    this.currentUserService.setCurrentUser(response);
    this.toastService.toast({ message: response.message, status: 'success' });
    this.responseSignal.set({
      success: { message: response.message },
      error: null,
      pending: false,
    });
  }

  private handleSignupError(err: any) {
    this.toastService.toast({ message: err.error.message, status: 'error' });
    this.responseSignal.set({
      success: null,
      error: { message: err.error.message },
      pending: false,
    });
  }

  private nextFormFieldAfterDelay(
    nextFormField: SignUpProgress,
    delay: number
  ) {
    setTimeout(() => {
      this.signupProgressService.toggle(nextFormField);
    }, delay);
  }
}
