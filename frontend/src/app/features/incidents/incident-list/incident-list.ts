import { Component, OnInit } from '@angular/core';
import { IncidentService } from '../../../core/services/incident';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-incident-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './incident-list.html',
  styleUrl: './incident-list.css'
})
export class IncidentList implements OnInit {

  incidents: any[] = [];

  constructor(private incidentService: IncidentService) {}

  ngOnInit(): void {

    this.incidentService.getAll()
      .subscribe(data => {
        this.incidents = data;
      });
  }
}