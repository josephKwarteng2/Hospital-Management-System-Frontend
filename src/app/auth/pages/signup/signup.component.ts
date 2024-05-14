import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { DoctorService } from '../../../shared/services/doctor.service';

import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthNavComponent } from '../../components/auth-nav/auth-nav.component';
import { BackgroundIllustrationComponent } from '../../components/background-illustration/background-illustration.component';
import { CustomInputFieldComponent } from '../../../components/custom-input-field/custom-input-field.component';
import { RouterLink } from '@angular/router';

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
export class SignupComponent {
  private doctorRegistrationService: DoctorService = inject(DoctorService);

  signupForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.email]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  // public registerDoctor(event: Event) {
  //   event.preventDefault();
  //   this.doctorRegistrationService.doctorRegistration().subscribe({
  //     next: (response) => {},
  //   });
  // }
}
