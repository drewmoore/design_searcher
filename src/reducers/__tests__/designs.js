import store from '../../store';

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
      expect(designs.items.length).toEqual(0)
    ));

    test('isFetching is false', () => (
      expect(designs.isFetching).toEqual(false)
    ));

    test('error is null', () => (
      expect(designs.error).toBeNull()
    ));
  });
});
