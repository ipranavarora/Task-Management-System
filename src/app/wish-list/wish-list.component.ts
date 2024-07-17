import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { WishItem } from '../../shared/models/wishItem';
import { WishState } from '../state/wish.state';
import { toggleWish, deleteWish, updateWish } from '../state/wish.actions';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AddWishFormComponent } from '../add-wish-form/add-wish-form.component';

@Component({
  selector: 'wish-list',
  standalone: true,
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css'],
  imports: [CommonModule, FormsModule],
  // declarations: [AddWishFormComponent],
})
export class WishListComponent {
  @Input() wishes: WishItem[] = [];
  editingItemId: string | null = null;

  constructor(private store: Store<{ wish: WishState }>) {}

  toggleItem(item: WishItem) {
    this.store.dispatch(toggleWish({ wish: item }));
  }

  deleteWish(item: WishItem) {
    this.store.dispatch(deleteWish({ wish: item }));
  }

  editWish(item: WishItem) {
    this.editingItemId = item.id;
  }

  cancelEdit() {
    this.editingItemId = null;
  }

  saveWish(item: WishItem) {
    this.store.dispatch(updateWish({ wish: item }));
    this.cancelEdit();
  }
}
