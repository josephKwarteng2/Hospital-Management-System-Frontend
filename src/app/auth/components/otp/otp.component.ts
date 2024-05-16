import { CommonModule } from '@angular/common';
import { Component, OnInit, signal, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { CustomInputFieldComponent } from '@components/custom-input-field/custom-input-field.component';
import { InitialSig, SignUpProgress } from 'src/app/shared/models/interfaces';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { SignupService } from '../../services/signup.service';
import { CurrentUserService } from '../../services/current-user.service';

@Component({
  selector: 'app-otp',
  standalone: true,
  imports: [CommonModule, CustomInputFieldComponent, ReactiveFormsModule],
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css', '../../styles/styles.css'],
})
export class OtpComponent implements OnInit {
  public loading = false;
  public responseSignal = signal<InitialSig>({
    success: null,
    error: null,
    pending: false,
  });
  public errorMessage: string | null = null;
  public successMessage: string | null = null;

  authService: AuthService = inject(AuthService);
  private router: Router = inject(Router);
  private signupProgress: SignupService = inject(SignupService);
  private currentUserService: CurrentUserService = inject(CurrentUserService);
  otpForm: FormGroup = new FormGroup({
    otp: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {}

  public verifyOtp() {
    this.loading = false;
    const otp = this.otpForm.get('otp')?.value;
    this.responseSignal.set({
      success: null,
      error: null,
      pending: true,
    });

    this.authService.veriftyOtp(otp).subscribe({
      next: (response) => {
        this.successMessage = response.message;
        this.currentUserService.setCurrentUser(response);
        this.signupProgress.toggle('success');
        this.clearSuccessMessageAfterDelay();
        this.responseSignal.set({
          success: response,
          error: null,
          pending: false,
        });
      },
      error: (error) => {
        this.errorMessage = error.error.message;
        this.clearErrorMessageAfterDelay();
        this.responseSignal.set({
          success: null,
          error: error,
          pending: false,
        });
      },
    });
  }

  private clearSuccessMessageAfterDelay() {
    setTimeout(() => {
      this.successMessage = '';
    }, 4000);
  }

  private clearErrorMessageAfterDelay() {
    setTimeout(() => {
      this.errorMessage = '';
    }, 4000);
  }
}
