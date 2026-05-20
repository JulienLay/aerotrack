import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { IncidentService } from '../../../core/services/incident';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-incident-create',
  styleUrls: ['./incident-create.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule
  ],
  templateUrl: './incident-create.html'
})
export class IncidentCreate {

  title = '';
  severity = '';
  description = '';
  status = '';

  constructor(
    private incidentService: IncidentService,
    private router: Router
  ) {}

  create() {
    if (!this.title || !this.severity || !this.description) return;

    this.incidentService.create({
      title: this.title,
      severity: this.severity,
      description: this.description,
      status: this.status
    }).subscribe(() => {
      this.router.navigate(['/incidents']);
    });
  }

  cancel() {
    this.router.navigate(['/incidents']);
  }
}