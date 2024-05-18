import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-trustees-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trustees-card.component.html',
  styleUrl: './trustees-card.component.css',
})
export class TrusteesCardComponent {
  trustees = [
    {
      profilePicture: 'assets/images/patients/user-profile.png',
      testimonial:
        'Booking appointments at the hospital used to be a hassle, but ever since I started using this platform, its been a breeze! I can easily schedule appointments with my doctor, view my upcoming appointments, and even receive reminders—all from the comfort of my home. Highly recommended!',
      name: 'Joseph Arthur',
      position: 'Business Consultant',
    },
    {
      profilePicture: 'assets/images/patients/user-profile.png',
      testimonial:
        'Booking appointments at the hospital used to be a hassle, but ever since I started using this platform, its been a breeze! I can easily schedule appointments with my doctor, view my upcoming appointments, and even receive reminders—all from the comfort of my home. Highly recommended!',
      name: 'Joseph Arthur',
      position: 'Business Consultant',
    },
    {
      profilePicture: 'assets/images/patients/user-profile.png',
      testimonial:
        'Booking appointments at the hospital used to be a hassle, but ever since I started using this platform, its been a breeze! I can easily schedule appointments with my doctor, view my upcoming appointments, and even receive reminders—all from the comfort of my home. Highly recommended!',
      name: 'Joseph Arthur',
      position: 'Business Consultant',
    },
    {
      profilePicture: 'assets/images/patients/user-profile.png',
      testimonial:
        'Booking appointments at the hospital used to be a hassle, but ever since I started using this platform, its been a breeze! I can easily schedule appointments with my doctor, view my upcoming appointments, and even receive reminders—all from the comfort of my home. Highly recommended!',
      name: 'Joseph Arthur',
      position: 'Business Consultant',
    },
    {
      profilePicture: 'assets/images/patients/user-profile.png',
      testimonial:
        'Booking appointments at the hospital used to be a hassle, but ever since I started using this platform, its been a breeze! I can easily schedule appointments with my doctor, view my upcoming appointments, and even receive reminders—all from the comfort of my home. Highly recommended!',
      name: 'Joseph Arthur',
      position: 'Business Consultant',
    },
  ];
}
