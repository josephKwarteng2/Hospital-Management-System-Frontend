import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthNavComponent } from 'src/app/auth/components/auth-nav/auth-nav.component';
import { BookAppointmentComponent } from '../../components/book-appointment/book-appointment.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterLink } from '@angular/router';
import { CustomInputFieldComponent } from '@components/custom-input-field/custom-input-field.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    AuthNavComponent,
    BookAppointmentComponent,
    FooterComponent,
    RouterLink,
    CustomInputFieldComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  doctors = [
    {
      name: 'Dr. Kweku Mensah',
      specialty: 'Cardiologist',
      hospitalName: 'Korle Bu Teaching Hospital',
      availability:
        'Here is a dummy text for a quote by the doctor. This does not make any sense so I don’t know why you are still reading this',
      image: 'assets/images/patients/female-doctor.png',
    },
    {
      name: 'Dr. Kweku Mensah',
      specialty: 'Cardiologist',
      hospitalName: 'Korle Bu Teaching Hospital',
      availability:
        'Here is a dummy text for a quote by the doctor. This does not make any sense so I don’t know why you are still reading this',
      image: 'assets/images/patients/female-doctor.png',
    },
    {
      name: 'Dr. Kweku Mensah',
      specialty: 'Cardiologist',
      hospitalName: 'Korle Bu Teaching Hospital',
      availability:
        'Here is a dummy text for a quote by the doctor. This does not make any sense so I don’t know why you are still reading this',
      image: 'assets/images/patients/female-doctor.png',
    },
    {
      name: 'Dr. Kweku Mensah',
      specialty: 'Cardiologist',
      hospitalName: 'Korle Bu Teaching Hospital',
      availability:
        'Here is a dummy text for a quote by the doctor. This does not make any sense so I don’t know why you are still reading this',
      image: 'assets/images/patients/female-doctor.png',
    },
    {
      name: 'Dr. Kweku Mensah',
      specialty: 'Cardiologist',
      hospitalName: 'Korle Bu Teaching Hospital',
      availability:
        'Here is a dummy text for a quote by the doctor. This does not make any sense so I don’t know why you are still reading this',
      image: 'assets/images/patients/female-doctor.png',
    },
    {
      name: 'Dr. Kweku Mensah',
      specialty: 'Cardiologist',
      hospitalName: 'Korle Bu Teaching Hospital',
      availability:
        'Here is a dummy text for a quote by the doctor. This does not make any sense so I don’t know why you are still reading this',
      image: 'assets/images/patients/female-doctor.png',
    },
    {
      name: 'Dr. Kweku Mensah',
      specialty: 'Cardiologist',
      hospitalName: 'Korle Bu Teaching Hospital',
      availability:
        'Here is a dummy text for a quote by the doctor. This does not make any sense so I don’t know why you are still reading this',
      image: 'assets/images/patients/female-doctor.png',
    },
    {
      name: 'Dr. Kweku Mensah',
      specialty: 'Cardiologist',
      hospitalName: 'Korle Bu Teaching Hospital',
      availability:
        'Here is a dummy text for a quote by the doctor. This does not make any sense so I don’t know why you are still reading this',
      image: 'assets/images/patients/female-doctor.png',
    },
    {
      name: 'Dr. Kweku Mensah',
      specialty: 'Cardiologist',
      hospitalName: 'Korle Bu Teaching Hospital',
      availability:
        'Here is a dummy text for a quote by the doctor. This does not make any sense so I don’t know why you are still reading this',
      image: 'assets/images/patients/female-doctor.png',
    },
    {
      name: 'Dr. Kweku Mensah',
      specialty: 'Cardiologist',
      hospitalName: 'Korle Bu Teaching Hospital',
      availability:
        'Here is a dummy text for a quote by the doctor. This does not make any sense so I don’t know why you are still reading this',
      image: 'assets/images/patients/female-doctor.png',
    },
    {
      name: 'Dr. Kweku Mensah',
      specialty: 'Cardiologist',
      hospitalName: 'Korle Bu Teaching Hospital',
      availability:
        'Here is a dummy text for a quote by the doctor. This does not make any sense so I don’t know why you are still reading this',
      image: 'assets/images/patients/female-doctor.png',
    },
    {
      name: 'Dr. Kweku Mensah',
      specialty: 'Cardiologist',
      hospitalName: 'Korle Bu Teaching Hospital',
      availability:
        'Here is a dummy text for a quote by the doctor. This does not make any sense so I don’t know why you are still reading this',
      image: 'assets/images/patients/female-doctor.png',
    },
  ];
}
