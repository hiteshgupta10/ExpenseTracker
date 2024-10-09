// goal.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoalService {
  private apiUrl = 'http://localhost:5000/api/Goal';

  constructor(private http: HttpClient) { }

  // Get all goals
  getGoals(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Add a new goal
  addGoal(goal: { name: string; targetAmount: number; userId: number }): Observable<any> {
    return this.http.post<any>(this.apiUrl, goal);
  }

  // Update an existing goal
  updateGoal(id: number, goal: { name: string; targetAmount: number }): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, goal);
  }

  // Delete a goal
  deleteGoal(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
