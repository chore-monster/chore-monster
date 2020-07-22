import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as fromChores from './chores.reducer';
import * as ChoresActions from './chores.actions';

@Injectable()
export class ChoresEffects {
  loadChores$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ChoresActions.loadChores),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return ChoresActions.loadChoresSuccess({ chores: [] });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return ChoresActions.loadChoresFailure({ error });
        },
      })
    )
  );

  constructor(private actions$: Actions) {}
}
