import { ChoresEntity } from './chores.models';
import * as ChoresActions from './chores.actions';
import { State, initialState, reducer } from './chores.reducer';

describe('Chores Reducer', () => {
  const createChoresEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as ChoresEntity);

  beforeEach(() => {});

  describe('valid Chores actions', () => {
    it('loadChoresSuccess should return set the list of known Chores', () => {
      const chores = [
        createChoresEntity('PRODUCT-AAA'),
        createChoresEntity('PRODUCT-zzz'),
      ];
      const action = ChoresActions.loadChoresSuccess({ chores });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
