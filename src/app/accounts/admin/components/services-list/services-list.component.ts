import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableComponentComponent } from '@components/table-component/table-component.component';

@Component({
  selector: 'app-services-list',
  standalone: true,
  imports: [CommonModule, TableComponentComponent],
  templateUrl: './services-list.component.html',
  styleUrl: './services-list.component.css',
})
export class ServicesListComponent {
  services = [
    ['Immunology', '20'],
    ['Ophthalmology', '45'],
    ['Dental', '60'],
    ['Neurology', '21'],
    ['Gynaecology', '30'],
    ['Cardiology', '40'],
    ['Pediatrics', '50'],
  ];

  tableHeaders = ['Service Name', 'Number of Doctors', 'Actions'];
}
