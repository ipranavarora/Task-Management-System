import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { HistoryState } from '../state/history.reducer';

@Component({
  selector: 'history-log',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history-log.component.html',
  styleUrls: ['./history-log.component.css']
})
export class HistoryLogComponent {
  logs$: Observable<string[]>;

  constructor(private store: Store<{ history: HistoryState }>) {
    this.logs$ = store.select(state => state.history.logs);
  }
}
