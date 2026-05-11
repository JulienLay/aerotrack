import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {

  private apiUrl = `${environment.apiUrl}/incidents`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  create(incident: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, incident);
  }
}