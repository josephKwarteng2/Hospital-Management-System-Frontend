import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CustomInputFieldComponent } from '../../../components/custom-input-field/custom-input-field.component';
import { getControlErrors } from '../../../shared/utils/constants';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-email-form',
  standalone: true,
  imports: [
    CommonModule,
    CustomInputFieldComponent,
    ReactiveFormsModule,
    RouterLink,
  ],
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css', '../../styles/styles.css'],
})
export class EmailFormComponent {
  public emailForm = new FormGroup({
    password: new FormControl('', [Validators.required]),
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
}
