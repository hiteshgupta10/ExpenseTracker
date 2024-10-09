// category.component.ts
import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
// import { CategoryService } from './category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories: any[] = [];
  newCategory: { name: string } = { name: '' };

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.getCategories();
  }

  // Fetch categories from the API
  getCategories(): void {
    this.categoryService.getCategories().subscribe(
      (data) => {
        this.categories = data;
      },
      (error) => {
        console.error('Error fetching categories', error);
      }
    );
  }

  // Add a new category
  addCategory(): void {
    if (this.newCategory.name) {
      this.categoryService.addCategory(this.newCategory).subscribe(
        (response) => {
          this.getCategories(); // Refresh the category list
          this.clearForm(); // Clear the form after submission
        },
        (error) => {
          console.error('Error adding category', error);
        }
      );
    } else {
      alert('Please enter a category name.');
    }
  }

  // Clear the input form after adding a category
  clearForm(): void {
    this.newCategory = { name: '' };
  }
}
