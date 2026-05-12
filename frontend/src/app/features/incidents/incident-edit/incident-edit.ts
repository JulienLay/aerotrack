import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IncidentService } from '../../../core/services/incident';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-incident-edit',
  standalone: true,
  imports: [CommonModule, 
    FormsModule, 
    MatCardModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatSelectModule, 
    MatButtonModule
  ],
  templateUrl: './incident-edit.html'
})
export class IncidentEdit implements OnInit {

  id!: number;
  title = '';
  description = '';
  severity = '';
  status = '';

  constructor(
    private route: ActivatedRoute,
    private incidentService: IncidentService,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.incidentService.getById(this.id).subscribe(res => {
      this.title = res.title;
      this.description = res.description;
      this.severity = res.severity;
      this.status = res.status;
    });
  }

  update() {
    this.incidentService.update(this.id, {
      title: this.title,
      description: this.description,
      severity: this.severity,
      status: this.status
    }).subscribe(() => {
      this.router.navigate(['/incidents']);
    });
  }
}