import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CustomInputFieldComponent } from '@components/custom-input-field/custom-input-field.component';

@Component({
  selector: 'app-appointment-form',
  standalone: true,
  imports: [CommonModule, CustomInputFieldComponent, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  templateUrl: './appointment-form.component.html',
  styleUrl: './appointment-form.component.css',
})
export class AppointmentFormComponent {
  appointmentForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    date: new FormControl('', [Validators.required]),
    time: new FormControl('', [Validators.required]),
  });
}
