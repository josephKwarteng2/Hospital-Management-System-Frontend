import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
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

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CustomInputFieldComponent,
    RouterLink,
  ],
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css', '../../styles/styles.css'],
})
export class SignupFormComponent {
  private doctorRegistrationService: AuthService = inject(AuthService);
  private currentUserService: CurrentUserService = inject(CurrentUserService);
  private router: Router = inject(Router);
  private signupProgress: SignupService = inject(SignupService);
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
    this.doctorRegistrationService
      .doctorRegistration(this.signupForm.value)
      .subscribe({
        next: (response) => {
          this.successMessage = response.message;
          this.currentUserService.setCurrentUser(response);
          this.signupProgress.toggle('otpForm');
          this.clearSuccessMessageAfterDelay();
        },
        error: (err) => {
          this.errorMessage = err.error.message;
        },
      });
  }

  private clearSuccessMessageAfterDelay() {
    setTimeout(() => {
      this.successMessage = '';
    }, 5000);
  }
}
