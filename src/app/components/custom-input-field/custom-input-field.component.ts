import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  ReactiveFormsModule,
  AbstractControl,
  FormControl,
} from '@angular/forms';
@Component({
  selector: 'app-custom-input-field',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './custom-input-field.component.html',
  styleUrl: './custom-input-field.component.css',
})
export class CustomInputFieldComponent {
  @Input() id: string = '';

  @Input() type: string = '';

  @Input() value: string = '';

  @Input() placeholder: string = '';

  @Input() name: string = '';

  @Input() globalClass: string = '';

  @Input() control: FormControl | AbstractControl | any;

  @Input() label: string = '';

  @Input() required: boolean = false;

  @Input() class: string = '';

  @Input() errorType: string = 'required';

  @Input() errorMessage: string = 'Field is required';

  @Input() showPassword: boolean = false;
}
