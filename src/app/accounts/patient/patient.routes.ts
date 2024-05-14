import { Route } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomeComponent } from './pages/home/home.component';
import { AppointmentComponent } from './pages/appointment/appointment.component';
import { CalendarComponent } from './pages/calendar/calendar.component';

export const PatientRoute: Route[] = [
  {
    path: 'landing-page',
    component: LandingPageComponent,
  },
  {
    path: 'home',
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
];
