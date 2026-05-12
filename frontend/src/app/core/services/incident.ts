import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IncidentService {

  private apiUrl = `${environment.apiUrl}/incidents`;

  constructor(private http: HttpClient) {}

  getAll(page: number, size: number, keyword?: string, severity?: string) {

    let url = `${this.apiUrl}?page=${page}&size=${size}&sort=id,desc`;

    if (keyword || severity) {
      url = `${this.apiUrl}/search?page=${page}&size=${size}&sort=id,desc`;

      if (keyword) {
        url += `&keyword=${keyword}`;
      }

      if (severity) {
        url += `&severity=${severity}`;
      }
    }

    return this.http.get<any>(url);
  }

  create(data: any) {
    return this.http.post<any>(this.apiUrl, data);
  }
  
  getById(id: number) {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
  
  update(id: number, data: any) {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}