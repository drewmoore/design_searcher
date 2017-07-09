import React                       from 'react';
import { Provider }                from 'react-redux';
import renderer                    from 'react-test-renderer';
import { createStore }             from 'redux';
import { mount }                   from 'enzyme';
import { stubFetch, restoreFetch } from '../../../test_support/helpers';
import store                       from '../../../store';
import DesignsListContainer        from '../list';

describe('DesignsContainer', () => {
  let template;

  beforeEach(() => {
    stubFetch();
    template = (
      <Provider store={store}>
        <DesignsListContainer />
      </Provider>
    );
  });

  afterEach(() => restoreFetch());

  describe('DOM Snapshot', () => {
    test('matches snapshot', () => {
      const tree = renderer.create(template).toJSON();
      expect(tree).toMatchSnapshot();
    })
  });

  describe('Rendering Props from State', () => {
    let designs, component;

    beforeEach(() => {
      designs = store.getState().designs;
      component = mount(template);
    });

    test('renders names', () => (
      designs.items.forEach(design => (
        expect(component.text()).toMatch(design.name)
      ))
    ));

    test('renders thumbnail images', () => (
      designs.items.forEach(design => (
        expect(
          component.find(`img[src="${design.thumbnail_url}"]`).length
        ).toBeGreaterThan(0)
      ))
    ));

    test('renders descriptions if available', () => (
      designs.items.forEach(design => {
        if (design.short_description) {
          expect(component.text()).toMatch(design.short_description)
        }
      })
    ));

    test('renders number of favorites for a design', () => (
      designs.items.forEach(design => (
        expect(
          component.find(`[data-num-favorites=${design.num_favorites}]`).length
        ).toBeGreaterThan(0)
      ))
    ));

    test('renders purchase links based on design url slug', () => (
      designs.items.forEach(design => (
        expect(component.html()).toMatch(design.slug)
      ))
    ));
  });
});
