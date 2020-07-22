import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  CHORES_FEATURE_KEY,
  State,
  ChoresPartialState,
  choresAdapter,
} from './chores.reducer';

// Lookup the 'Chores' feature state managed by NgRx
export const getChoresState = createFeatureSelector<ChoresPartialState, State>(
  CHORES_FEATURE_KEY
);

const { selectAll, selectEntities } = choresAdapter.getSelectors();

export const getChoresLoaded = createSelector(
  getChoresState,
  (state: State) => state.loaded
);

export const getChoresError = createSelector(
  getChoresState,
  (state: State) => state.error
);

export const getAllChores = createSelector(getChoresState, (state: State) =>
  selectAll(state)
);

export const getChoresEntities = createSelector(
  getChoresState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getChoresState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getChoresEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
