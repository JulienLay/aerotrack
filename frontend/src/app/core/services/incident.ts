import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Incident } from '../models/incident';
import { Page } from '../models/page';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {

  private apiUrl = `${environment.apiUrl}/incidents`;

  constructor(private http: HttpClient) {}

  getAll(page: number = 0, size: number = 10) {
    return this.http.get<Page<Incident>>(
      `${this.apiUrl}?page=${page}&size=${size}`
    );
  }
}