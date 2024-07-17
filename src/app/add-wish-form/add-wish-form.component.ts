import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../../shared/models/wishItem';

@Component({
  selector: 'add-wish-form',
  standalone: true,
  imports: [CommonModule, FormsModule],  // Add FormsModule here
  templateUrl: './add-wish-form.component.html',
  styleUrls: ['./add-wish-form.component.css']
})

export class AddWishFormComponent {
  @Output() addWish = new EventEmitter<WishItem>();

  newWish: WishItem = { wishText: '', description: '', dueDate: '', priority: '', status: '', isComplete: false };
  newWishText: string = '';
  description: string = '';
  dueDate: string = '';
  priority: string = '';

  addItem() {
    // Create a new WishItem object based on the form inputs
    const newItem: WishItem = {
      wishText: this.newWishText,
      description: this.description,
      dueDate: this.dueDate,
      priority: this.priority,
      status: 'pending', // You might want to set a default value for status
      isComplete: false // Add the missing property isComplete with an initial value
    };
  
    // Emit the new wish item to the parent component
    this.addWish.emit(newItem);
  
    // Reset form fields after emitting
    this.newWishText = '';
    this.description = '';
    this.dueDate = '';
    this.priority = '';
  }
}  