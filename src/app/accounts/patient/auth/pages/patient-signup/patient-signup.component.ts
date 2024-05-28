import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { PatientSignupFormComponent } from '../../components/patient-signup-form/patient-signup-form.component';
import { InputFields } from 'src/app/shared/models/interfaces';
import { Subscription } from 'rxjs';
import { AuthNavComponent } from 'src/app/auth/components/auth-nav/auth-nav.component';
import { Router } from '@angular/router';
import { PatientSignupProgressService } from '../../../services/patient-signup-progress.service';
import { PatientOtpComponent } from '../../components/patient-otp/patient-otp.component';

@Component({
  selector: 'app-patient-signup',
  standalone: true,
  imports: [
    CommonModule,
    PatientSignupFormComponent,
    AuthNavComponent,
    PatientOtpComponent,
  ],
  templateUrl: './patient-signup.component.html',
  styleUrls: [
    './patient-signup.component.css',
    '../../../../../auth/styles/styles.css',
  ],
})
export class PatientSignupComponent implements OnInit {
  public formField: InputFields = 'patientSignupForm';
  subscriptions: Subscription[] = [];
  private router: Router = inject(Router);
  public signupProgress: PatientSignupProgressService = inject(
    PatientSignupProgressService
  );

  ngOnInit(): void {
    this.subscribeToProgressChanges();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  private subscribeToProgressChanges() {
    const toggSubscription = this.signupProgress.data.subscribe({
      next: (data) => {
        this.formField = data;
        if (data === 'success') {
          this.router.navigate(['/patient/landing-page']);
        }
      },
    });

    this.subscriptions.push(toggSubscription);
  }
}
