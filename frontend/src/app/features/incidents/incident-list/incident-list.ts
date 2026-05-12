import { Component, OnInit } from '@angular/core';
import { IncidentService } from '../../../core/services/incident';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { Incident } from '../../../core/models/incident';

@Component({
  selector: 'app-incident-list',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './incident-list.html',
  styleUrl: './incident-list.css'
})
export class IncidentList implements OnInit {

  incidents: Incident[] = [];

  constructor(
    private incidentService: IncidentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
  this.incidentService.getAll()
    .subscribe(data => {
      console.log('DATA:', data);
      this.incidents = data.content;
    });
}

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}