import React                from 'react';
import { Provider }         from 'react-redux';
import renderer             from 'react-test-renderer';
import { createStore }      from 'redux';
import { mount }            from 'enzyme';
import store                from '../../store';
import PlaceholderContainer from '../placeholder';

describe('PlaceholderContainer', () => {
  let template;

  beforeEach(() => {
    template = (
      <Provider store={store}>
        <PlaceholderContainer />
      </Provider>
    );
  });

  describe('DOM Snapshot', () => {
    test('matches snapshot', () => {
      const tree = renderer.create(template).toJSON();
      expect(tree).toMatchSnapshot();
    })
  });

  describe('Rendering Props from State', () => {
    test('renders message', () => (
      expect(mount(template).text()).toMatch(/World/)
    ));
  });
});
