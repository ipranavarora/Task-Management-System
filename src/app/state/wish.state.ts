import { WishItem } from "../../shared/models/wishItem";

export interface WishState {
  items: WishItem[];
  filter: (item: WishItem) => boolean;
}

export const initialState: WishState = {
  items: [],
  filter: () => true,
};
