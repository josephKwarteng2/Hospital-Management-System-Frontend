import { CommonModule } from '@angular/common';
import { Component, OnInit, inject, signal } from '@angular/core';
import { BackgroundIllustrationComponent } from '../background-illustration/background-illustration.component';
import { AuthNavComponent } from '../auth-nav/auth-nav.component';
import { CustomInputFieldComponent } from '@components/custom-input-field/custom-input-field.component';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { InitialSig } from 'src/app/shared/models/auth.types';
import { AuthService } from '../../services/auth.service';
import { User } from 'src/app/shared/models/auth.types';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from '@components/toast/toast.service';
import { ToastComponent } from '@components/toast/toast.component';

@Component({
  selector: 'app-new-password',
  standalone: true,
  imports: [
    CommonModule,
    BackgroundIllustrationComponent,
    AuthNavComponent,
    CustomInputFieldComponent,
    ReactiveFormsModule,
    ToastComponent,
  ],
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css', '../../styles/styles.css'],
})
export class NewPasswordComponent implements OnInit {
  private passwordResetService: AuthService = inject(AuthService);
  private router: Router = inject(Router);
  private toastService: ToastService = inject(ToastService);

  public email = '';
  otp: string;
  userId: string;
  password: string = '';
  confirmPassword: string = '';
  public errorMessage: string | null = null;
  public successMessage: string | null = null;
  public responseSignal = signal<InitialSig>({
    success: null,
    error: null,
    pending: false,
  });
  constructor(private route: ActivatedRoute) {
    this.otp = this.route.snapshot.paramMap.get('otp')!;
    this.userId = this.route.snapshot.paramMap.get('id')!;
    this.email = this.route.snapshot.paramMap.get('email')!;
  }

  passwordForm: FormGroup = new FormGroup({
    userId: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    // confirmPassword: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.otp = params['otp'];
      this.userId = params['id'];
      this.email = params['email'];

      this.passwordForm.patchValue({
        userId: this.userId,
        email: this.email,
      });
    });
  }

  public resetPassword() {
    if (this.passwordForm.valid) {
      this.responseSignal.set({ success: null, error: null, pending: true });

      const formValue = this.passwordForm.value;

      this.passwordResetService
        .resetPassword(
          this.otp,
          formValue.userId,
          formValue.email,
          formValue.password
          // formValue.confirmPassword
        )
        .subscribe({
          next: (response) => {
            this.handlePasswordResetSuccess(response);
          },
          error: (error) => {
            this.handlePasswordResetError(error);
          },
        });
    }
  }

  private handlePasswordResetSuccess(response: User) {
    this.toastService.toast({ message: response.message, status: 'success' });
    this.router.navigate(['/login']);
    this.responseSignal.set({
      success: response,
      error: null,
      pending: false,
    });
  }

  private handlePasswordResetError(err: any) {
    this.toastService.toast({ message: err.error.message, status: 'error' });
    this.responseSignal.set({
      success: null,
      error: err,
      pending: false,
    });
  }
}
