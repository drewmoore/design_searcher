import store          from '../../store';
import DesignsActions from '../../actions/designs';

describe('Designs Reducer', () => {
  describe('default', () => {
    let designs;

    beforeEach(() => {
      store.dispatch({
        type: 'default'
      });
      designs = store.getState().designs;
    });

    test('reduces to a set of empty items', () => (
      expect(Object.values(designs.items).length).toEqual(0)
    ));

    test('isFetching is false', () => (
      expect(designs.isFetching).toEqual(false)
    ));

    test('error is null', () => (
      expect(designs.error).toBeNull()
    ));
  });

  describe('fetch designs', () => {
    let initialState, designs;

    beforeEach(() => {
      const action = store.dispatch(DesignsActions.fetch())
                     .then(() => (designs = store.getState().designs));
      initialState = store.getState().designs;
      return action;
    });

    describe('initial state', () => {
      test('isFetching is true', () => (
        expect(initialState.isFetching).toEqual(true)
      ));
    });

    describe('completed state', () => {
      test('isFetching is false', () => (
        expect(designs.isFetching).toEqual(false)
      ));

      test('reduces to a set of design items', () => (
        expect(Object.values(designs.items).length).toBeGreaterThan(0)
      ));

      test('error is null', () => (
        expect(designs.error).toBeNull()
      ));
    });
  });
});
