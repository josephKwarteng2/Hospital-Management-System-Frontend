import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css',
})
export class DropdownComponent {
  @Input() options: string[] = [];
  @Output() optionSelected: EventEmitter<string> = new EventEmitter();
  selectedOption: string = '';
  isOpen: boolean = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }
  onSelect(option: string) {
    this.selectedOption = option;
    this.optionSelected.emit(option);
  }
}
