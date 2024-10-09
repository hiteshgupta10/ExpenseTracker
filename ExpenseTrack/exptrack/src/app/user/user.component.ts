// user.component.ts
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
// import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any[] = [];
  newUser: { username: string; email: string; password: string } = {
    username: '',
    email: '',
    password: ''
  };

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  // Fetch users from the API
  getUsers(): void {
    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.error('Error fetching users', error);
      }
    );
  }

  // Add a new user
  addUser(): void {
    if (this.newUser.username && this.newUser.email && this.newUser.password) {
      this.userService.addUser(this.newUser).subscribe(
        (response) => {
          this.getUsers(); // Refresh the user list
          this.clearForm(); // Clear the form after submission
        },
        (error) => {
          console.error('Error adding user', error);
        }
      );
    } else {
      alert('Please fill out all fields correctly.');
    }
  }

  // Clear the input form after adding a user
  clearForm(): void {
    this.newUser = { username: '', email: '', password: '' };
  }
}
