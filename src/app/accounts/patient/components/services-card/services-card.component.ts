import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-services-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services-card.component.html',
  styleUrl: './services-card.component.css',
})
export class ServicesCardComponent {
  services = [
    {
      picture: 'assets/images/patients/pediatrics.svg',
      name: 'Pediatrics Services',
      description:
        'Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices',
    },
    {
      picture: 'assets/images/patients/neurology.svg',
      name: 'Neurology Services',
      description:
        'Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices',
    },
    {
      picture: 'assets/images/patients/gynecology.svg',
      name: 'Gynecology Services',
      description:
        'Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices',
    },
    {
      picture: 'assets/images/patients/immunology.svg',
      name: 'Immunology Services',
      description:
        'Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices',
    },
    {
      picture: 'assets/images/patients/dental.svg',
      name: 'Dental Services',
      description:
        'Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices',
    },
    {
      picture: 'assets/images/patients/ophthalmology.svg',
      name: 'Ophthalmology Services',
      description:
        'Egestas tellus nunc proin amet tellus tincidunt lacus consequat. Ultrices',
    },
  ];
}
