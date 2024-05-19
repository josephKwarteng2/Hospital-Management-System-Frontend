import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CustomInputFieldComponent } from '@components/custom-input-field/custom-input-field.component';

@Component({
  selector: 'app-book-appointment',
  standalone: true,
  imports: [CommonModule, CustomInputFieldComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  templateUrl: './book-appointment.component.html',
  styleUrl: './book-appointment.component.css',
})
export class BookAppointmentComponent {
  onChange(event: Event) {
    console.log(event);
  }
}
