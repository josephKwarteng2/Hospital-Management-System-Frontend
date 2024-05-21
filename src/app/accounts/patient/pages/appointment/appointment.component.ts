import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthNavComponent } from 'src/app/auth/components/auth-nav/auth-nav.component';
import { AppointmentFormComponent } from '../../components/appointment-form/appointment-form.component';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [CommonModule, AuthNavComponent, AppointmentFormComponent],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css',
})
export class AppointmentComponent {}
