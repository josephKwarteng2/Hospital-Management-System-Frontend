import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthNavComponent } from '../../components/auth-nav/auth-nav.component';
import { BackgroundIllustrationComponent } from '../../components/background-illustration/background-illustration.component';
import { CustomInputFieldComponent } from '../../../components/custom-input-field/custom-input-field.component';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CurrentUserService } from '../../services/current-user.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthNavComponent,
    BackgroundIllustrationComponent,
    CustomInputFieldComponent,
    RouterLink,
  ],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css', '../../styles/styles.css'],
})
export class SignupComponent implements OnInit {
  private doctorRegistrationService: AuthService = inject(AuthService);
  private currentUserService: CurrentUserService = inject(CurrentUserService);
  private router: Router = inject(Router);

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
          this.router.navigate(['/doctor/dashboard']);
        },
        error: (err) => {
          this.errorMessage = err.error.message;
        },
      });
  }
}
