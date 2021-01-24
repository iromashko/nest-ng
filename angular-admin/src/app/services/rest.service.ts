import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export abstract class RestService<T> {
  abstract get endpoint(): string;

  constructor(protected http: HttpClient) {}

  all(page?: number): Observable<T[]> {
    let url = this.endpoint;
    if (page) {
      url += `?page=${page}`;
    }
    return this.http.get<T[]>(url);
  }

  create(data): Observable<T> {
    return this.http.post<T>(this.endpoint, data);
  }

  get(id: number): Observable<T> {
    return this.http.get<T>(`${this.endpoint}/${id}`);
  }

  update(id: number, data): Observable<T> {
    return this.http.put<T>(`${this.endpoint}/${id}`, data);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.endpoint}/${id}`);
  }
}
