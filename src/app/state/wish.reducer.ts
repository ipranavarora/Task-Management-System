import { createReducer, on, Action } from '@ngrx/store';
import { addWish, toggleWish, deleteWish, setFilter } from './wish.actions';
import { WishState, initialState } from './wish.state';
import { WishItem } from '../../shared/models/wishItem';

const _wishReducer = createReducer(
  initialState,
  on(addWish, (state, { wish }) => ({
    ...state,
    items: [...state.items, { ...wish, isComplete: false }], // Initialize isComplete if needed
  })),
  on(toggleWish, (state, { wish }) => ({
    ...state,
    items: state.items.map(item =>
      item === wish ? { ...item, isComplete: !item.isComplete } : item
    ),
  })),
  on(deleteWish, (state, { wish }) => ({
    ...state,
    items: state.items.filter(item => item !== wish),
  })),
  on(setFilter, (state, { filter }) => ({
    ...state,
    filter: filter,
  }))
);

export function wishReducer(state: WishState | undefined, action: Action) {
  return _wishReducer(state, action);
}
