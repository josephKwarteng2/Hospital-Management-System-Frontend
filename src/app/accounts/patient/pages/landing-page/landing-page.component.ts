import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { AuthNavComponent } from '../../../../auth/components/auth-nav/auth-nav.component';
import { ServicesCardComponent } from '../../components/services-card/services-card.component';
import { TrusteesCardComponent } from '../../components/trustees-card/trustees-card.component';
import { CustomInputFieldComponent } from '@components/custom-input-field/custom-input-field.component';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    CommonModule,
    AuthNavComponent,
    ServicesCardComponent,
    TrusteesCardComponent,
    CustomInputFieldComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {
  authService: AuthService = inject(AuthService);
  router: Router = inject(Router);

  bookAppointment() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/patient/home']);
    } else {
      this.router.navigate(['/patient/login']);
    }
  }
}
