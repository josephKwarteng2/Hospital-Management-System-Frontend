import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableComponentComponent } from '../../../../components/table-component/table-component.component';

@Component({
  selector: 'app-doctor-details',
  standalone: true,
  imports: [CommonModule, TableComponentComponent],
  templateUrl: './doctor-details.component.html',
  styleUrl: './doctor-details.component.css',
})
export class DoctorDetailsComponent {
  doctorsDetails = [
    [
      'Dr. John Doe',
      'johndoe@example.com',
      'Dermatologist',
      'Senior',
      'Active',
    ],
    [
      'Dr. Jane Smith',
      'janesmith@example.com',
      'Cardiologist',
      'Junior',
      'Inactive',
    ],
    ['Dr. John Doe', 'johndoe@example.com', 'Orthopedist', 'Senior', 'Active'],
    [
      'Dr. Jane Smith',
      'janesmith@example.com',
      'Neurologist',
      'Junior',
      'Inactive',
    ],
    ['Dr. John Doe', 'johndoe@example.com', 'Cardiology', 'Senior', 'Active'],
    [
      'Dr. Jane Smith',
      'janesmith@example.com',
      'Oncologist',
      'Junior',
      'Inactive',
    ],
    ['Dr. John Doe', 'johndoe@example.com', 'Cardiology', 'Senior', 'Active'],
    [
      'Dr. Jane Smith',
      'janesmith@example.com',
      'Neurology',
      'Junior',
      'Inactive',
    ],
    ['Dr. John Doe', 'johndoe@example.com', 'Cardiology', 'Senior', 'Active'],
    [
      'Dr. Jane Smith',
      'janesmith@example.com',
      'Neurology',
      'Junior',
      'Inactive',
    ],
    ['Dr. John Doe', 'johndoe@example.com', 'Cardiology', 'Senior', 'Active'],
    [
      'Dr. Jane Smith',
      'janesmith@example.com',
      'Pediatrician',
      'Junior',
      'Inactive',
    ],
  ];

  tableHeaders = [
    'Fullname',
    'Email address',
    'Specialization',
    'Level / Rank',
    'Status',
    '',
  ];
}
