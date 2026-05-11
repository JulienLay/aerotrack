import { Routes } from '@angular/router';
import { Login } from './features/auth/login/login';
import { IncidentList } from './features/incidents/incident-list/incident-list';

export const routes: Routes = [
  {
    path: 'login',
    component: Login
  },
  {
    path: 'incidents',
    component: IncidentList
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];