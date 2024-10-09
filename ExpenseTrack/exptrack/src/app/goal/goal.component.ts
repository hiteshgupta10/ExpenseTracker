// goal.component.ts
import { Component, OnInit } from '@angular/core';
import { GoalService } from '../goal.service';
// import { GoalService } from './goal.service';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals: any[] = [];
  newGoal: { name: string; targetAmount: number; userId: number } = { name: '', targetAmount: 0, userId: 0 };

  constructor(private goalService: GoalService) { }

  ngOnInit(): void {
    this.getGoals();
  }

  // Fetch goals from the API
  getGoals(): void {
    this.goalService.getGoals().subscribe(
      (data) => {
        this.goals = data;
      },
      (error) => {
        console.error('Error fetching goals', error);
      }
    );
  }

  // Add a new goal
  addGoal(): void {
    if (this.newGoal.name && this.newGoal.targetAmount > 0 && this.newGoal.userId > 0) {
      this.goalService.addGoal(this.newGoal).subscribe(
        (response) => {
          this.getGoals(); // Refresh the goal list
          this.clearForm(); // Clear the form after submission
        },
        (error) => {
          console.error('Error adding goal', error);
        }
      );
    } else {
      alert('Please fill out all fields correctly.');
    }
  }

  // Clear the input form after adding a goal
  clearForm(): void {
    this.newGoal = { name: '', targetAmount: 0, userId: 0 };
  }
}
