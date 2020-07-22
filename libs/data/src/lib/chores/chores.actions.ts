import { createAction, props } from '@ngrx/store';
import { ChoresEntity } from './chores.models';

export const loadChores = createAction('[Chores] Load Chores');

export const loadChoresSuccess = createAction(
  '[Chores] Load Chores Success',
  props<{ chores: ChoresEntity[] }>()
);

export const loadChoresFailure = createAction(
  '[Chores] Load Chores Failure',
  props<{ error: any }>()
);
