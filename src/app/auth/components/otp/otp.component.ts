import { CommonModule } from '@angular/common';
import { Component, OnInit, signal, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { CustomInputFieldComponent } from '@components/custom-input-field/custom-input-field.component';
import {
  InitialSig,
  SignUpProgress,
  User,
} from 'src/app/shared/models/interfaces';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { SignupService } from '../../services/signup.service';
import { CurrentUserService } from '../../services/current-user.service';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-otp',
  standalone: true,
  imports: [CommonModule, CustomInputFieldComponent, ReactiveFormsModule],
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css', '../../styles/styles.css'],
})
export class OtpComponent implements OnInit {
  public responseSignal = signal<InitialSig>({
    success: null,
    error: null,
    pending: false,
  });
  public errorMessage: string | null = null;
  public successMessage: string | null = null;
  public email = '';
  authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);
  private signupProgress: SignupService = inject(SignupService);
  private currentUserService: CurrentUserService = inject(CurrentUserService);
  private emailService: EmailService = inject(EmailService);
  otpForm: FormGroup = new FormGroup({
    otp: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    this.email = this.emailService.getEmail();
  }

  public verifyOtp() {
    this.clearMessages();
    const otp = this.otpForm.get('otp')?.value;
    this.responseSignal.set({ success: null, error: null, pending: true });
    this.authService.veriftyOtp(otp).subscribe({
      next: (response) => {
        this.handleVerificationSuccess(response);
      },
      error: (err) => {
        this.handleVerificationError(err);
      },
    });
  }

  private handleVerificationSuccess(response: User) {
    this.successMessage = response.message;
    this.currentUserService.setCurrentUser(response);
    this.nextFormFieldAfterDelay('success', 3000);
    this.responseSignal.set({
      success: response,
      error: null,
      pending: false,
    });
  }

  private handleVerificationError(err: any) {
    this.errorMessage = err.error.message;
    this.clearErrorMessageAfterDelay();
    this.responseSignal.set({
      success: null,
      error: err,
      pending: false,
    });
  }

  private clearMessages() {
    this.errorMessage = '';
    this.successMessage = '';
  }

  private clearErrorMessageAfterDelay() {
    setTimeout(() => {
      this.errorMessage = '';
    }, 4000);
  }

  private nextFormFieldAfterDelay(
    nextFormField: SignUpProgress,
    delay: number
  ) {
    setTimeout(() => {
      this.signupProgress.toggle(nextFormField);
    }, delay);
  }
}
