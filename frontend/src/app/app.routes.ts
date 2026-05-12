import { Routes } from '@angular/router';
import { Login } from './features/auth/login/login';
import { IncidentList } from './features/incidents/incident-list/incident-list';
import { IncidentCreate } from './features/incidents/incident-create/incident-create';
import { IncidentEdit } from './features/incidents/incident-edit/incident-edit';
import { authGuard } from './core/guards/auth-guard';
import { IncidentShellComponent } from './features/incidents/incident-shell/incident-shell';

export const routes: Routes = [
  {
    path: 'login',
    component: Login
  },
  {
    path: 'incidents',
    canActivate: [authGuard],
    component: IncidentShellComponent,
    children: [
      { path: '', component: IncidentList },
      { path: 'create', component: IncidentCreate },
      { path: ':id/edit', component: IncidentEdit }
    ]
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