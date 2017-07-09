import update         from 'immutability-helper';
import FiltersActions from '../actions/filters';

const defaultState = {
  offset:    0,
  limit:     10,
  sort:      'classic',
  substrate: 'any',
};

const filters = (state = defaultState, action = {}) => {
  switch (action.type) {
    case FiltersActions.UPDATE_FILTERS:
      return update(state, { $merge: action.filters });
    default:
      return state;
  }
};

export default filters;
