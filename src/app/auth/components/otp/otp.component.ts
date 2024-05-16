import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CustomInputFieldComponent } from '@components/custom-input-field/custom-input-field.component';

@Component({
  selector: 'app-otp',
  standalone: true,
  imports: [CommonModule, CustomInputFieldComponent],
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css', '../../styles/styles.css'],
})
export class OtpComponent {}
