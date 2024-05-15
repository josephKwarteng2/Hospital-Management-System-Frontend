import { Route } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const DoctorRoute: Route[] = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
];
