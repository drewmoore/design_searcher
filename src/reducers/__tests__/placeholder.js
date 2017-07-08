import store from '../../store';

describe('Placeholder Reducer', () => {
  describe('default', () => {
    let placeholder;

    beforeEach(() => {
      store.dispatch({
        type: 'default'
      });
      placeholder = store.getState().placeholder;
    });

    test('reduces to having a hello world message', () => (
      expect(placeholder.message).toMatch(/World/)
    ));
  });
});
