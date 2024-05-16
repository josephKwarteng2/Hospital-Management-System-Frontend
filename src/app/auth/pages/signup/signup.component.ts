import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { OtpComponent } from '../../components/otp/otp.component';
import { SignupFormComponent } from '../../components/signup-form/signup-form.component';
import { SignUpProgress } from 'src/app/shared/models/interfaces';
import { Subscription } from 'rxjs';
import { SignupService } from '../../services/signup.service';
import { BackgroundIllustrationComponent } from '../../components/background-illustration/background-illustration.component';
import { AuthNavComponent } from '../../components/auth-nav/auth-nav.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    OtpComponent,
    SignupFormComponent,
    BackgroundIllustrationComponent,
    AuthNavComponent,
    OtpComponent,
  ],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css', '../../styles/styles.css'],
})
export class SignupComponent implements OnInit {
  public formField: SignUpProgress = 'signupForm';
  subscriptions: Subscription[] = [];
  router: Router = inject(Router);
  public signupProgress: SignupService = inject(SignupService);

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
          this.router.navigate(['/doctor/dashboard']);
        }
      },
    });

    this.subscriptions.push(toggSubscription);
  }
}
