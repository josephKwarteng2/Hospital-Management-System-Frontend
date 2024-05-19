import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthNavComponent } from 'src/app/auth/components/auth-nav/auth-nav.component';
import { BookAppointmentComponent } from '../../components/book-appointment/book-appointment.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AuthNavComponent, BookAppointmentComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  doctors = [
    {
      name: 'Dr. Kweku Mensah',
      specialty: 'Cardiologist',
      availability: 'Available on Monday, Wednesday and Friday',
      image: 'assets/images/patients/female-doctor.png',
    },
    {
      name: 'Dr. Kweku Mensah',
      specialty: 'Cardiologist',
      availability: 'Available on Monday, Wednesday and Friday',
      image: 'assets/images/patients/female-doctor.png',
    },
    {
      name: 'Dr. Kweku Mensah',
      specialty: 'Cardiologist',
      availability: 'Available on Monday, Wednesday and Friday',
      image: 'assets/images/patients/female-doctor.png',
    },
    {
      name: 'Dr. Kweku Mensah',
      specialty: 'Cardiologist',
      availability: 'Available on Monday, Wednesday and Friday',
      image: 'assets/images/patients/female-doctor.png',
    },
    {
      name: 'Dr. Kweku Mensah',
      specialty: 'Cardiologist',
      availability: 'Available on Monday, Wednesday and Friday',
      image: 'assets/images/patients/female-doctor.png',
    },
    {
      name: 'Dr. Kweku Mensah',
      specialty: 'Cardiologist',
      availability: 'Available on Monday, Wednesday and Friday',
      image: 'assets/images/patients/female-doctor.png',
    },
    {
      name: 'Dr. Kweku Mensah',
      specialty: 'Cardiologist',
      availability: 'Available on Monday, Wednesday and Friday',
      image: 'assets/images/patients/female-doctor.png',
    },
    {
      name: 'Dr. Kweku Mensah',
      specialty: 'Cardiologist',
      availability: 'Available on Monday, Wednesday and Friday',
      image: 'assets/images/patients/female-doctor.png',
    },
    {
      name: 'Dr. Kweku Mensah',
      specialty: 'Cardiologist',
      availability: 'Available on Monday, Wednesday and Friday',
      image: 'assets/images/patients/female-doctor.png',
    },
    {
      name: 'Dr. Kweku Mensah',
      specialty: 'Cardiologist',
      availability: 'Available on Monday, Wednesday and Friday',
      image: 'assets/images/patients/female-doctor.png',
    },
  ];
}
