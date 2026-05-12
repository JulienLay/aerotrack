import { Component, OnInit } from '@angular/core';
import { IncidentService } from '../../../core/services/incident';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { Incident } from '../../../core/models/incident';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-incident-list',
  standalone: true,
  imports: [CommonModule, 
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatPaginatorModule,
    FormsModule
  ],
  templateUrl: './incident-list.html',
  styleUrl: './incident-list.css'
})
export class IncidentList implements OnInit {

  incidents: Incident[] = [];

  displayedColumns: string[] = [
    'id',
    'title',
    'description',
    'severity',
    'status'
  ];

  page = 0;
  size = 10;
  totalElements = 0;
  keyword = '';
  severity = '';
  role: string | null = null;

  constructor(
    private incidentService: IncidentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.role = localStorage.getItem('role');

    if (this.role === 'ADMIN') {
      this.displayedColumns.push('actions');
    }

    this.load();
  }

  load() {
    this.incidentService.getAll(this.page, this.size, this.keyword, this.severity)
      .subscribe(res => {
        this.incidents = res.content;
        this.totalElements = res.totalElements;
      });
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(['/login']);
  }

    onPageChange(event: PageEvent) {

    this.page = event.pageIndex;
    this.size = event.pageSize;

    this.load();
  }

  applyFilters() {
    this.page = 0;
    this.load();
  }

  resetFilters() {
    this.keyword = '';
    this.severity = '';
    this.page = 0;
    this.load();
  }

  openCreate() {
    this.router.navigate(['/incidents/create']);
  }

  openEdit(id: number) {
    this.router.navigate(['/incidents', id, 'edit']);
  }
  
  delete(id: number) {
    this.incidentService.delete(id).subscribe(() => {
      this.load();
    });
  }
}