import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthNavComponent } from '../../../../auth/components/auth-nav/auth-nav.component';
import { ServicesCardComponent } from '../../components/services-card/services-card.component';
import { TrusteesCardComponent } from '../../components/trustees-card/trustees-card.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    CommonModule,
    AuthNavComponent,
    ServicesCardComponent,
    TrusteesCardComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {}
