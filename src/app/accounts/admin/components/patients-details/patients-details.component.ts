import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableComponentComponent } from '../../../../components/table-component/table-component.component';

@Component({
  selector: 'app-patients-details',
  standalone: true,
  imports: [CommonModule, TableComponentComponent],
  templateUrl: './patients-details.component.html',
  styleUrl: './patients-details.component.css',
})
export class PatientsDetailsComponent {
  patientsDetails = [
    [
      'Olivia Shirley Rhye',
      'olivia@gmail.com',
      'Female',
      '05589757589',
      '1234 Elm St, Anytown, ',
      'Active',
    ],
    [
      'Phoenix Baker Rolands',
      'phoenix@gmail.com',
      'Male',
      '5678 Oak Ave, Anytown,',
      '027 162 2105',
      'Inactive',
    ],
    [
      'Olivia Shirley Rhye',
      'olivia@gmail.com',
      'Female',
      '05589757589',
      '1234 Elm St, Anytown, ',
      'Active',
    ],
    [
      'Phoenix Baker Rolands',
      'phoenix@gmail.com',
      'Male',
      '5678 Oak Ave, Anytown,',
      '027 162 2105',
      'Inactive',
    ],
    [
      'Olivia Shirley Rhye',
      'olivia@gmail.com',
      'Female',
      '05589757589',
      '1234 Elm St, Anytown, ',
      'Active',
    ],
    [
      'Phoenix Baker Rolands',
      'phoenix@gmail.com',
      'Male',
      '5678 Oak Ave, Anytown,',
      '027 162 2105',
      'Inactive',
    ],
    [
      'Olivia Shirley Rhye',
      'olivia@gmail.com',
      'Female',
      '05589757589',
      '1234 Elm St, Anytown, ',
      'Active',
    ],
    [
      'Phoenix Baker Rolands',
      'phoenix@gmail.com',
      'Male',
      '5678 Oak Ave, Anytown,',
      '027 162 2105',
      'Inactive',
    ],
    [
      'Olivia Shirley Rhye',
      'olivia@gmail.com',
      'Female',
      '05589757589',
      '1234 Elm St, Anytown, ',
      'Active',
    ],
    [
      'Phoenix Baker Rolands',
      'phoenix@gmail.com',
      'Male',
      '5678 Oak Ave, Anytown,',
      '027 162 2105',
      'Inactive',
    ],
  ];

  tableHeaders = [
    'Fullname',
    'Email address',
    'Gender',
    'Contact',
    'Address',
    'Status',
    '',
  ];
}
