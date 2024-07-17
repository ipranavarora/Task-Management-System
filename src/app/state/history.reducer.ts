import { createReducer, on, Action } from '@ngrx/store';
import { logHistory } from './history.actions';

export interface HistoryState {
  logs: string[];
}

export const initialHistoryState: HistoryState = {
  logs: [],
};

const _historyReducer = createReducer(
  initialHistoryState,
  on(logHistory, (state, { message }) => ({
    ...state,
    logs: [...state.logs, message],
  }))
);

export function historyReducer(state: HistoryState | undefined, action: Action) {
  return _historyReducer(state, action);
}
