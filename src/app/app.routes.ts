import { Routes } from '@angular/router';
import { LoginComponent } from './auth/pages/login/login.component';
import { SignupComponent } from './auth/pages/signup/signup.component';
import { ForgotPasswordComponent } from './auth/pages/forgot-password/forgot-password.component';
import { AccountsRoute } from './accounts/accounts.routes';
import { LandingPageComponent } from './accounts/patient/pages/landing-page/landing-page.component';
LandingPageComponent;
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/landing-page',
    pathMatch: 'full',
  },
  {
    path: 'landing-page',
    component: LandingPageComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
  {
    path: 'auth/password-reset/:otp/:id/:email',
    loadComponent: () =>
      import('../app/auth/components/new-password/new-password.component').then(
        (m) => m.NewPasswordComponent
      ),
  },

  ...AccountsRoute,
];
