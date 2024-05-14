import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-component.component.html',
  styleUrl: './table-component.component.css',
})
export class TableComponentComponent {
  @Input() data: any[] = [];
  @Input() headers: string[] = [];
}
