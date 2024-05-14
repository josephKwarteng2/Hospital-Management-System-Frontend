import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthNavComponent } from '../../../../auth/components/auth-nav/auth-nav.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [CommonModule, AuthNavComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {}
