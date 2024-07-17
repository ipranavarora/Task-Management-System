// src/app/add-wish-form/add-wish-form.component.ts

import { Component, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'add-wish-form',
  standalone: true,
  templateUrl: './add-wish-form.component.html',
  styleUrls: ['./add-wish-form.component.css'],
  imports: [FormsModule],

})
export class AddWishFormComponent {
  @Output() addWish = new EventEmitter<WishItem>();

  newWish: WishItem = { id: '', wishText: '', description: '', dueDate: '', priority: '', status: '', isComplete: false };

  addItem() {
    // Emit the new wish item to the parent component
    this.addWish.emit(this.newWish);

    // Reset form fields after emitting
    this.newWish = { id: '', wishText: '', description: '', dueDate: '', priority: '', status: '', isComplete: false };
  }
}
