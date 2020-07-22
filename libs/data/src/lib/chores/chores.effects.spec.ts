import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { ChoresEffects } from './chores.effects';
import * as ChoresActions from './chores.actions';

describe('ChoresEffects', () => {
  let actions: Observable<any>;
  let effects: ChoresEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        ChoresEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.get(ChoresEffects);
  });

  describe('loadChores$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: ChoresActions.loadChores() });

      const expected = hot('-a-|', {
        a: ChoresActions.loadChoresSuccess({ chores: [] }),
      });

      expect(effects.loadChores$).toBeObservable(expected);
    });
  });
});
