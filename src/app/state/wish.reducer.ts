// src/app/state/wish.reducer.ts

import { createReducer, on, Action } from '@ngrx/store';
import { WishItem } from '../../shared/models/wishItem';
import * as WishActions from './wish.actions';

export interface WishState {
  items: WishItem[];
  filter: (item: WishItem) => boolean;
}

export const initialState: WishState = {
  items: [],
  filter: () => true, // Default filter, change as per your requirement
};

const _wishReducer = createReducer(
  initialState,
  on(WishActions.addWish, (state, { wish }) => ({
    ...state,
    items: [...state.items, { ...wish, id: generateId() }],
  })),
  on(WishActions.updateWish, (state, { wish }) => ({
    ...state,
    items: state.items.map(item => item.id === wish.id ? { ...wish } : item),
  })),
  on(WishActions.toggleWish, (state, { wish }) => ({
    ...state,
    items: state.items.map(item =>
      item.id === wish.id ? { ...item, isComplete: !item.isComplete } : item
    ),
  })),
  on(WishActions.deleteWish, (state, { wish }) => ({
    ...state,
    items: state.items.filter(item => item.id !== wish.id),
  })),
  on(WishActions.setFilter, (state, { filter }) => ({
    ...state,
    filter,
  }))
);

export function wishReducer(state: WishState | undefined, action: Action) {
  return _wishReducer(state, action);
}

function generateId(): string {
  // Implement your unique ID generation logic here
  return Math.random().toString(36).substr(2, 9); // Example of simple ID generation
}
