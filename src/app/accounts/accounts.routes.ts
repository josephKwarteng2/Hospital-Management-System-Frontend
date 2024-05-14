import { Routes } from '@angular/router';

export const AccountsRoute: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.routes').then((m) => m.AdminRoutes),
  },
  {
    path: 'patient',
    loadChildren: () =>
      import('./patient/patient.routes').then((m) => m.PatientRoute),
  },
];
