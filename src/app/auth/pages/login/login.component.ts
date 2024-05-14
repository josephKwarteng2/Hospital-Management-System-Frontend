import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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
import { RouterLink } from '@angular/router';

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
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    console.log(this.loginForm.value);
  }

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
}
