import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WishItem } from '../../shared/models/wishItem';

@Component({
  selector: 'wish-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './wish-filter.component.html',
  styleUrls: ['./wish-filter.component.css']
})
export class WishFilterComponent implements OnInit {
  @Output() filter = new EventEmitter<(item: WishItem) => boolean>();

  listFilter: string = '0';

  ngOnInit(): void {
    this.changeFilter('0');
  }

  changeFilter(value: string) {
    this.listFilter = value;
    switch (value) {
      case '0':
        this.filter.emit((item: WishItem) => true);
        break;
      case '1':
        this.filter.emit((item: WishItem) => item.status !== 'Completed');
        break;
      case '2':
        this.filter.emit((item: WishItem) => item.status === 'Completed');
        break;
    }
  }
}