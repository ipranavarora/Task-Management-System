import { createAction, props } from '@ngrx/store';
import { WishItem } from '../../shared/models/wishItem';

export const addWish = createAction(
  '[Wish List] Add Wish',
  props<{ wish: WishItem }>()
);

export const toggleWish = createAction(
  '[Wish List] Toggle Wish',
  props<{ wish: WishItem }>()
);

export const deleteWish = createAction(
  '[Wish List] Delete Wish',
  props<{ wish: WishItem }>()
);

export const setFilter = createAction(
  '[Wish List] Set Filter',
  props<{ filter: (item: WishItem) => boolean }>()
);
