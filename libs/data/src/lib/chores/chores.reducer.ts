import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as ChoresActions from './chores.actions';
import { ChoresEntity } from './chores.models';

export const CHORES_FEATURE_KEY = 'chores';

export interface State extends EntityState<ChoresEntity> {
  selectedId?: string | number; // which Chores record has been selected
  loaded: boolean; // has the Chores list been loaded
  error?: string | null; // last none error (if any)
}

export interface ChoresPartialState {
  readonly [CHORES_FEATURE_KEY]: State;
}

export const choresAdapter: EntityAdapter<ChoresEntity> = createEntityAdapter<
  ChoresEntity
>();

export const initialState: State = choresAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const choresReducer = createReducer(
  initialState,
  on(ChoresActions.loadChores, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(ChoresActions.loadChoresSuccess, (state, { chores }) =>
    choresAdapter.addAll(chores, { ...state, loaded: true })
  ),
  on(ChoresActions.loadChoresFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return choresReducer(state, action);
}
