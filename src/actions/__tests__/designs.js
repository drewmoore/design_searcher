import { stubFetch, restoreFetch } from '../../test_support/helpers';
import store          from '../../store';
import DesignsActions from '../designs';

describe('DesignsActions', () => {
  beforeEach(() => { stubFetch(); });
  afterEach(()  => { restoreFetch(); });

  describe('fetch', () => {
    let action;

    beforeEach(() => (
      store.dispatch(DesignsActions.fetch()).then((data) => (action = data))
    ));

    test('resolves with the correct type', () => (
      expect(action.type).toEqual(DesignsActions.FETCH_DESIGNS)
    ));

    test('resolves with the correct status', () => (
      expect(action.status).toEqual('success')
    ));

    test('resolves with object of design results', () => (
      expect(Object.values(action.results).length).toBeGreaterThan(0)
    ));
  });
});
