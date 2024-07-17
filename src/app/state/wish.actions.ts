// src/app/state/wish.actions.ts

import { createAction, props } from '@ngrx/store';
import { WishItem } from '../../shared/models/wishItem';

export const addWish = createAction('[Wish] Add Wish', props<{ wish: WishItem }>());
export const updateWish = createAction('[Wish] Update Wish', props<{ wish: WishItem }>());
export const toggleWish = createAction('[Wish] Toggle Wish', props<{ wish: WishItem }>());
export const deleteWish = createAction('[Wish] Delete Wish', props<{ wish: WishItem }>());
export const setFilter = createAction('[Wish] Set Filter', props<{ filter: (item: WishItem) => boolean }>());
