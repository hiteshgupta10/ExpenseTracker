// category.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'http://localhost:5000/api/Category';

  constructor(private http: HttpClient) { }

  // Get all categories
  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Add a new category
  addCategory(category: { name: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, category);
  }

  // Update an existing category
  updateCategory(id: number, category: { name: string }): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, category);
  }

  // Delete a category
  deleteCategory(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
