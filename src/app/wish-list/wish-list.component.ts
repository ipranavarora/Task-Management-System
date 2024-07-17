import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { WishItem } from '../../shared/models/wishItem';
import { WishState } from '../state/wish.state';
import { toggleWish, deleteWish } from '../state/wish.actions';
import { logHistory } from '../state/history.actions';

@Component({
  selector: 'wish-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent {
  @Input() wishes: WishItem[] = [];

  constructor(private store: Store<{ wish: WishState }>) {}

  toggleItem(item: WishItem) {
    this.store.dispatch(toggleWish({ wish: item }));
    this.store.dispatch(logHistory({ message: `Toggled wish: ${item.wishText}` }));
  }

  deleteWish(item: WishItem) {
    this.store.dispatch(deleteWish({ wish: item }));
    this.store.dispatch(logHistory({ message: `Deleted wish: ${item.wishText}` }));
  }

  editWish(item: WishItem) {
    // Implement edit functionality here and log it
  }
}
