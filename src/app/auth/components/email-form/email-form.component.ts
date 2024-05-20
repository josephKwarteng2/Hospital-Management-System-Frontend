import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { CustomInputFieldComponent } from '../../../components/custom-input-field/custom-input-field.component';
import { getControlErrors } from '../../../shared/utils/constants';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { User } from 'src/app/shared/models/interfaces';
import { InitialSig } from 'src/app/shared/models/interfaces';
import { ToastService } from '@components/toast/toast.service';
import { EmailService } from '../../services/email.service';
import { ToastComponent } from '@components/toast/toast.component';
import { CurrentUserService } from '../../services/current-user.service';

@Component({
  selector: 'app-email-form',
  standalone: true,
  imports: [
    CommonModule,
    CustomInputFieldComponent,
    ReactiveFormsModule,
    RouterLink,
    ToastComponent,
  ],
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css', '../../styles/styles.css'],
})
export class EmailFormComponent {
  public responseSignal = signal<InitialSig>({
    success: null,
    error: null,
    pending: false,
  });
  private authService: AuthService = inject(AuthService);
  private emailService: EmailService = inject(EmailService);
  private toastService: ToastService = inject(ToastService);
  private currentUserService: CurrentUserService = inject(CurrentUserService);
  public emailForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
  });

  public getEmailErrors(): string {
    return getControlErrors(
      'email',
      {
        required: 'This field is required',
        email: 'Enter a valid email address',
      },
      this.emailForm
    );
  }

  public submitEmailForm() {
    const email = this.emailForm.get('email')?.value;
    if (this.emailForm.invalid) {
      return this.toastService.toast({
        message: 'Please enter a valid email address',
        status: 'error',
      });
    }
    this.responseSignal.set({ success: null, error: null, pending: true });
    if (email) {
      this.emailService.setEmail(email);
      this.authService.sendEmail(email).subscribe({
        next: (res) => {
          this.handleEmailSubmissionSuccess(res);
        },
        error: (err) => {
          this.handleEmailSubmissionError(err);
        },
      });
    }
  }

  private handleEmailSubmissionSuccess(res: User) {
    this.currentUserService.setCurrentUser(res);
    this.toastService.toast({ message: res.message, status: 'success' });
    this.responseSignal.set({
      success: { message: res.message },
      error: null,
      pending: false,
    });
  }

  private handleEmailSubmissionError(err: any) {
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
