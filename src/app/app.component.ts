import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { WishItem } from '../shared/models/wishItem';
import { WishState } from './state/wish.state';
import { addWish, setFilter } from './state/wish.actions';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { HistoryLogComponent } from './history-log/history-log.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    AddWishFormComponent,
    WishFilterComponent,
    WishListComponent,
    HistoryLogComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items$: Observable<WishItem[]>;

  constructor(private store: Store<{ wish: WishState }>) {
    // Select items$ from store, ensuring it does not emit null
    this.items$ = store.select(state => state.wish.items || []);
  }

  addWish(wish: WishItem) {
    this.store.dispatch(addWish({ wish }));
  }

  setFilter(filter: (item: WishItem) => boolean) {
    this.store.dispatch(setFilter({ filter }));
  }

  exportToCSV() {
    this.items$.subscribe(items => {
      const csvContent = 'data:text/csv;charset=utf-8,' +
        items.map(item => `${item.wishText},${item.description},${item.dueDate},${item.priority},${item.status}`).join('\n');
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement('a');
      link.setAttribute('href', encodedUri);
      link.setAttribute('download', 'tasks.csv');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }
}
