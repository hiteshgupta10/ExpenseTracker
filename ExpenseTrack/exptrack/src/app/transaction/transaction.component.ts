// transaction.component.ts
import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
// import { TransactionService } from './transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transactions: any[] = [];
  newTransaction: { description: string; amount: number; date: string; categoryId: number; userId: number } = {
    description: '',
    amount: 0,
    date: '',
    categoryId: 0,
    userId: 0
  };

  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.getTransactions();
  }

  // Fetch transactions from the API
  getTransactions(): void {
    this.transactionService.getTransactions().subscribe(
      (data) => {
        this.transactions = data;
      },
      (error) => {
        console.error('Error fetching transactions', error);
      }
    );
  }

  // Add a new transaction
  addTransaction(): void {
    if (this.newTransaction.description && this.newTransaction.amount > 0 && this.newTransaction.date && this.newTransaction.categoryId > 0 && this.newTransaction.userId > 0) {
      this.transactionService.addTransaction(this.newTransaction).subscribe(
        (response) => {
          this.getTransactions(); // Refresh the list after adding
          this.clearForm(); // Clear the form after submission
        },
        (error) => {
          console.error('Error adding transaction', error);
        }
      );
    } else {
      alert('Please fill out all fields correctly.');
    }
  }

  // Clear the input form after adding a transaction
  clearForm(): void {
    this.newTransaction = { description: '', amount: 0, date: '', categoryId: 0, userId: 0 };
  }
}
