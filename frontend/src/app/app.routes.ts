import { Routes } from '@angular/router';

import { Login } from './features/auth/login/login';
import { IncidentList } from './features/incidents/incident-list/incident-list';

import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [

  {
    path: 'login',
    component: Login
  },

  {
    path: 'incidents',
    component: IncidentList,
    canActivate: [authGuard]
  },

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: '**',
    redirectTo: 'login'
  }
];