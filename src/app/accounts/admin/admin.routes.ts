import { Route } from '@angular/router';
import { PatientsComponent } from './pages/patients/patients.component';
import { ConfigurationsComponent } from './pages/configurations/configurations.component';
import { ServicesComponent } from './pages/services/services.component';
import { PaymentsComponent } from './pages/payments/payments.component';
import { MedicalFormComponent } from './pages/medical-form/medical-form.component';
import { FaqsComponent } from './pages/faqs/faqs.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DoctorsComponent } from './pages/doctors/doctors.component';
import { AddFaqsComponent } from './pages/add-faqs/add-faqs.component';

export const AdminRoutes: Route[] = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'doctors',
    component: DoctorsComponent,
  },
  { path: 'patients', component: PatientsComponent },
  { path: 'configurations', component: ConfigurationsComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'payments', component: PaymentsComponent },
  { path: 'medical-form', component: MedicalFormComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: 'add-faqs', component: AddFaqsComponent },
  { path: 'analytics', component: AnalyticsComponent },
];
