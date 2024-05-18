import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { AuthNavComponent } from '../../components/auth-nav/auth-nav.component';
import { BackgroundIllustrationComponent } from '../../components/background-illustration/background-illustration.component';
import { Subscription } from 'rxjs';
import { InputFields } from '../../services/password-reset-toggle.service';
import { PasswordResetToggleService } from '../../services/password-reset-toggle.service';
import { EmailFormComponent } from '../../components/email-form/email-form.component';
import { NewPasswordComponent } from '../../components/new-password/new-password.component';
import { OtpComponent } from '../../components/otp/otp.component';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    CommonModule,
    AuthNavComponent,
    BackgroundIllustrationComponent,
    EmailFormComponent,
    NewPasswordComponent,
    OtpComponent,
  ],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css', '../../styles/styles.css'],
})
export class ForgotPasswordComponent {
  // public formField: InputFields = 'email';
  // subscriptions: Subscription[] = [];
  // public passwordResetToggle: PasswordResetToggleService = inject(
  //   PasswordResetToggleService
  // );
  // ngOnInit(): void {}
  // public toggleSubscription() {
  //   const toggSubscription = this.passwordResetToggle.data.subscribe({
  //     next: (data) => {
  //       this.formField = data;
  //     },
  //   });
  //   this.subscriptions.push(toggSubscription);
  // }
  // ngOnDestroy(): void {
  //   this.subscriptions.forEach((sub) => sub.unsubscribe());
}
