import { ChoresEntity } from './chores.models';
import { State, choresAdapter, initialState } from './chores.reducer';
import * as ChoresSelectors from './chores.selectors';

describe('Chores Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getChoresId = (it) => it['id'];
  const createChoresEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as ChoresEntity);

  let state;

  beforeEach(() => {
    state = {
      chores: choresAdapter.addAll(
        [
          createChoresEntity('PRODUCT-AAA'),
          createChoresEntity('PRODUCT-BBB'),
          createChoresEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Chores Selectors', () => {
    it('getAllChores() should return the list of Chores', () => {
      const results = ChoresSelectors.getAllChores(state);
      const selId = getChoresId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = ChoresSelectors.getSelected(state);
      const selId = getChoresId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getChoresLoaded() should return the current 'loaded' status", () => {
      const result = ChoresSelectors.getChoresLoaded(state);

      expect(result).toBe(true);
    });

    it("getChoresError() should return the current 'error' state", () => {
      const result = ChoresSelectors.getChoresError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
