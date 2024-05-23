import { Route } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { PatientLoginComponent } from './auth/pages/patient-login/patient-login.component';
import { PatientSignupComponent } from './auth/pages/patient-signup/patient-signup.component';

export const PatientRoute: Route[] = [
  {
    path: 'dashboard',
    component: HomeComponent,
  },
  {
    path: 'book-appointment',
    component: AppointmentComponent,
  },
  {
    path: 'calendar',
    component: CalendarComponent,
  },

  {
    path: 'login',
    component: PatientLoginComponent,
  },
  {
    path: 'signup',
    component: PatientSignupComponent,
  },
];
