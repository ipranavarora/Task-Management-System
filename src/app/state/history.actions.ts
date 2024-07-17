import { createAction, props } from '@ngrx/store';
import { WishItem } from '../../shared/models/wishItem';

export const logHistory = createAction(
  '[Wish History] Log History',
  props<{ message: string }>()
);
