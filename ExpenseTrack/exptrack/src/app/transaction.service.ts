// transaction.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  private apiUrl = 'http://localhost:5000/api/Transaction';

  constructor(private http: HttpClient) { }

  // Get all transactions
  getTransactions(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Add a new transaction
  addTransaction(transaction: { description: string; amount: number; date: string; categoryId: number; userId: number }): Observable<any> {
    return this.http.post<any>(this.apiUrl, transaction);
  }
}
